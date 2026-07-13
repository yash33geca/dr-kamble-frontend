const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || ''

function getCandidateUrls(url) {
  const trimmed = (url || '').trim()
  if (!trimmed) return []

  const urls = new Set([trimmed])
  if (!trimmed.endsWith('/exec') && !trimmed.endsWith('/dev')) {
    urls.add(`${trimmed}${trimmed.endsWith('/') ? '' : '/'}exec`)
    urls.add(`${trimmed}${trimmed.endsWith('/') ? '' : '/'}dev`)
  }

  return [...urls]
}

export async function saveAppointmentToGoogleSheet(booking) {
  const candidateUrls = getCandidateUrls(GOOGLE_APPS_SCRIPT_URL)

  if (!candidateUrls.length) {
    return { ok: false, skipped: true, reason: 'Google Apps Script URL is not configured.' }
  }

  let lastError = null

  for (const url of candidateUrls) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        body: JSON.stringify({
          action: 'saveAppointment',
          payload: booking,
        }),
      })

      if (!response.ok) {
        const text = await response.text().catch(() => '')
        throw new Error(`Status ${response.status}${text ? `: ${text}` : ''}`)
      }

      const text = await response.text()
      if (!text) {
        return { ok: true, url }
      }

      try {
        return { ok: true, data: JSON.parse(text), url }
      } catch {
        return { ok: true, raw: text, url }
      }
    } catch (error) {
      lastError = error
    }
  }

  return {
    ok: false,
    reason: lastError?.message || 'Unable to reach the Google Apps Script deployment. Check that the Web App is deployed and the URL ends with /exec.',
    urls: candidateUrls,
  }
}
