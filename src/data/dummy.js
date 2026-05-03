// ─── Doctor ───────────────────────────────────────────────────────────────────
export const doctor = {
  name: 'Dr. Nishant Kamble',
  shortName: 'Dr. Kamble',
  title: 'MD, DM (Rheumatology)',
  specialty: 'Consultant Rheumatologist',
  hospital: 'Pune Rheumatology & Arthritis Centre',
  experience: 14,
  patients: 8500,
  bio: `Dr. Nishant Kamble is a leading Consultant Rheumatologist with over 14 years of experience diagnosing and treating complex autoimmune and musculoskeletal disorders. He completed his DM in Rheumatology from AIIMS New Delhi and has trained at the Royal College of Physicians, London.

His practice focuses on evidence-based, patient-centred care for conditions such as Rheumatoid Arthritis, Lupus, Ankylosing Spondylitis, and Gout. Dr. Kamble is committed to helping patients manage chronic conditions and improve their quality of life.`,
  qualifications: [
    { degree: 'MBBS', institution: 'BJ Medical College, Pune', year: '2005' },
    { degree: 'MD (General Medicine)', institution: 'Seth GS Medical College, Mumbai', year: '2009' },
    { degree: 'DM (Rheumatology)', institution: 'AIIMS, New Delhi', year: '2013' },
    { degree: 'Fellowship (Clinical Immunology)', institution: 'Royal College of Physicians, London', year: '2015' },
  ],
  memberships: [
    'Indian Rheumatology Association (IRA)',
    'Asia Pacific League of Associations for Rheumatology (APLAR)',
    'European League Against Rheumatism (EULAR)',
    'Maharashtra Medical Council',
  ],
  languages: ['English', 'Hindi', 'Marathi'],
  avatar: null,
}

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    slug: 'rheumatoid-arthritis',
    title: 'Rheumatoid Arthritis',
    icon: '🦴',
    description: 'Comprehensive diagnosis and management of RA including disease-modifying therapies, biologic agents, and joint preservation strategies.',
    duration: 30,
  },
  {
    id: 2,
    slug: 'lupus-sle',
    title: 'Lupus (SLE)',
    icon: '🔬',
    description: 'Personalised treatment plans for Systemic Lupus Erythematosus covering organ monitoring, immunosuppression, and flare management.',
    duration: 30,
  },
  {
    id: 3,
    slug: 'ankylosing-spondylitis',
    title: 'Ankylosing Spondylitis',
    icon: '🫀',
    description: 'Expert management of axial spondyloarthritis including biologics, physiotherapy coordination, and long-term monitoring.',
    duration: 30,
  },
  {
    id: 4,
    slug: 'gout-management',
    title: 'Gout & Crystal Arthropathy',
    icon: '💊',
    description: 'Targeted urate-lowering therapy, acute attack management, and lifestyle counselling for gout and calcium pyrophosphate disease.',
    duration: 20,
  },
  {
    id: 5,
    slug: 'osteoporosis',
    title: 'Osteoporosis & Bone Health',
    icon: '🩻',
    description: 'DEXA scan interpretation, fracture risk assessment, and evidence-based pharmacotherapy for bone density disorders.',
    duration: 30,
  },
  {
    id: 6,
    slug: 'vasculitis',
    title: 'Vasculitis & Rare Disorders',
    icon: '🧬',
    description: 'Diagnosis and management of vasculitis, myositis, Sjögren\'s syndrome, and other rare autoimmune rheumatic diseases.',
    duration: 45,
  },
]

// ─── Reviews ──────────────────────────────────────────────────────────────────
export const reviews = [
  {
    id: 1,
    name: 'Priya Desai',
    rating: 5,
    date: '2024-11-12',
    condition: 'Rheumatoid Arthritis',
    text: 'Dr. Kamble changed my life. After years of uncontrolled RA and three failed treatments, he identified the right biologic for me. I\'m now in remission for the first time in six years. His approach is thorough, compassionate, and evidence-based.',
  },
  {
    id: 2,
    name: 'Rajesh Mehta',
    rating: 5,
    date: '2024-10-28',
    condition: 'Gout',
    text: 'I\'d been having recurring gout attacks for two years. Dr. Kamble did a thorough workup, explained everything clearly, and the treatment plan he gave me has been incredibly effective. Zero attacks in eight months.',
  },
  {
    id: 3,
    name: 'Sunita Joshi',
    rating: 5,
    date: '2024-09-15',
    condition: 'Lupus (SLE)',
    text: 'Living with lupus is hard, but having Dr. Kamble as my doctor makes it manageable. He takes time to listen, adjusts the plan when needed, and is very accessible for urgent queries. Highly recommend.',
  },
  {
    id: 4,
    name: 'Anand Kulkarni',
    rating: 4,
    date: '2024-08-03',
    condition: 'Ankylosing Spondylitis',
    text: 'Very knowledgeable doctor. The wait time can be a bit long due to his popularity, but the consultation quality is worth it. He explained my AS diagnosis in a way I finally understood after years of confusion.',
  },
  {
    id: 5,
    name: 'Meera Patil',
    rating: 5,
    date: '2024-07-22',
    condition: 'Osteoporosis',
    text: 'Excellent doctor. Took a very systematic approach to my bone health and designed a treatment plan that fits my age and lifestyle. His staff is also very helpful with follow-up queries.',
  },
  {
    id: 6,
    name: 'Vikram Rao',
    rating: 5,
    date: '2024-06-10',
    condition: 'Psoriatic Arthritis',
    text: 'Dr. Kamble diagnosed my psoriatic arthritis when three other doctors had missed it for two years. He is incredibly thorough and I genuinely feel he cares about his patients\' outcomes. A true expert.',
  },
]

// ─── Articles ─────────────────────────────────────────────────────────────────
export const articles = [
  {
    id: 1,
    slug: 'understanding-rheumatoid-arthritis',
    title: 'Understanding Rheumatoid Arthritis: More Than Just Joint Pain',
    category: 'Rheumatoid Arthritis',
    author: doctor.name,
    date: '2025-01-15',
    readTime: 6,
    excerpt: 'Rheumatoid arthritis is a systemic autoimmune disease that affects far more than the joints. Learn about early warning signs, the importance of prompt diagnosis, and what modern treatment can achieve.',
    content: `Rheumatoid arthritis (RA) is one of the most common autoimmune diseases, affecting approximately 1% of the global population. Unlike osteoarthritis, which is a wear-and-tear disease, RA is driven by the immune system attacking the body's own joint lining.

**Early Signs to Watch For**

The hallmark of RA is symmetrical joint inflammation — meaning both hands, both wrists, or both knees are affected at the same time. Morning stiffness lasting more than 45 minutes is a particularly important early warning sign. Other features include fatigue, low-grade fever, and general malaise.

**Why Early Diagnosis Matters**

Modern rheumatology has transformed RA from a disabling disease into a highly manageable one — but timing is everything. Studies consistently show that patients who start disease-modifying therapy within the first six months of symptoms achieve significantly better long-term outcomes than those who delay.

**Treatment Landscape**

First-line treatment typically involves conventional DMARDs like methotrexate. For patients who don't respond adequately, a wide range of biologic and targeted synthetic DMARDs are now available — including TNF inhibitors, IL-6 receptor blockers, and JAK inhibitors. The goal of modern RA treatment is remission or low disease activity.

If you have persistent joint swelling, morning stiffness, or a family history of RA, early evaluation by a rheumatologist is strongly recommended.`,
  },
  {
    id: 2,
    slug: 'lupus-myths-facts',
    title: 'Lupus: Separating Myths from Medical Facts',
    category: 'Lupus',
    author: doctor.name,
    date: '2025-01-02',
    readTime: 5,
    excerpt: 'Systemic Lupus Erythematosus is widely misunderstood. This article addresses common misconceptions and explains what a lupus diagnosis actually means for daily life.',
    content: `Systemic Lupus Erythematosus (SLE), commonly called lupus, is a chronic autoimmune disease that can affect virtually any organ in the body. Despite being relatively common — it affects around 5 million people worldwide — it remains widely misunderstood.

**Myth 1: Lupus is always severe and life-threatening**

Reality: Lupus exists on a spectrum. Many patients have mild-to-moderate disease that is well-controlled with standard medications like hydroxychloroquine. While serious organ involvement (kidneys, heart, brain) does occur, it is not inevitable and can often be prevented with appropriate monitoring.

**Myth 2: Only women get lupus**

Reality: While lupus is significantly more common in women (9:1 ratio), men do get lupus — and often have more severe disease when they do. It can also affect children and older adults.

**Myth 3: There\'s nothing you can do**

Reality: Treatment has advanced dramatically. Modern immunosuppressants, biologics like belimumab, and careful lifestyle management allow most lupus patients to live active, productive lives.

**The Butterfly Rash**

The classic malar rash — a butterfly-shaped redness across the cheeks and nose — is one of the most recognisable features of lupus, though it only appears in about 50% of patients. Sun sensitivity (photosensitivity) is another common feature.

**When to See a Rheumatologist**

If you have unexplained joint pain, skin rashes, fatigue, hair loss, or abnormal blood tests (low platelets, anaemia, positive ANA), an evaluation by a rheumatologist is warranted.`,
  },
  {
    id: 3,
    slug: 'gout-diet-lifestyle',
    title: 'Gout in 2025: What Your Diet Can and Cannot Do',
    category: 'Gout',
    author: doctor.name,
    date: '2024-12-18',
    readTime: 4,
    excerpt: 'Dietary changes alone are rarely enough to control gout. Here\'s what the evidence actually says about food, uric acid, and when medication is the right answer.',
    content: `Gout is caused by the deposition of monosodium urate crystals in joints, typically the result of chronically elevated uric acid levels (hyperuricaemia). It is the most common form of inflammatory arthritis in adults.

**The Role of Diet**

Diet does influence uric acid levels, and certain foods are well-established triggers: red meat, organ meats, shellfish, and — particularly — alcohol (especially beer and spirits). High-fructose corn syrup in sweetened beverages is also a significant contributor.

However, it is important to be realistic: diet modification alone typically lowers uric acid by only 10–15%. For most patients with recurrent gout, this is not enough to reach the treatment target of uric acid below 360 µmol/L.

**When Medication is Needed**

Urate-lowering therapy (ULT) — typically with allopurinol or febuxostat — is indicated for anyone with two or more attacks per year, tophi, or gout-associated kidney stones. The goal is to keep uric acid consistently below target and allow existing crystals to dissolve over time.

**A Common Mistake**

Many patients stop allopurinol when they have an attack, believing it is making things worse. In reality, starting or adjusting urate-lowering therapy can temporarily mobilise crystals and trigger a flare — this is expected, not a sign the medication has failed.

If you are having recurrent gout attacks, speak to a rheumatologist about a comprehensive management plan.`,
  },
  {
    id: 4,
    slug: 'osteoporosis-prevention',
    title: 'Osteoporosis: The Silent Disease You Can Prevent',
    category: 'Bone Health',
    author: doctor.name,
    date: '2024-12-05',
    readTime: 5,
    excerpt: 'Osteoporosis causes no symptoms until a bone fractures — often with devastating consequences. Learn who is at risk, how to screen for it, and what works to strengthen bone.',
    content: `Osteoporosis is defined by low bone mineral density and deterioration of bone microarchitecture, leading to increased fracture risk. It affects an estimated 200 million people worldwide and is responsible for more than 8.9 million fractures annually.

**Who is at Risk?**

Risk factors include advanced age, female sex (especially post-menopausal), family history of hip fracture, smoking, excessive alcohol intake, long-term corticosteroid use, low body weight, and conditions such as rheumatoid arthritis, inflammatory bowel disease, and coeliac disease.

**Screening and Diagnosis**

Osteoporosis is diagnosed by DEXA (dual-energy X-ray absorptiometry) scanning, which measures bone mineral density and generates a T-score. A T-score of -2.5 or below is diagnostic of osteoporosis. Fracture risk tools like FRAX can also incorporate clinical risk factors to estimate 10-year fracture probability.

**What Actually Works**

Weight-bearing exercise and resistance training are among the most effective non-pharmacological interventions. Adequate calcium and vitamin D intake is essential. For those at high fracture risk, medications including bisphosphonates, denosumab, and romosozumab are highly effective.

**A Note on Corticosteroids**

Patients on long-term steroids (any dose for more than 3 months) should be assessed for osteoporosis and considered for prophylactic bone protection therapy. This is an area where early intervention makes a substantial difference.`,
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    id: 1,
    question: 'What conditions does a rheumatologist treat?',
    answer: 'Rheumatologists diagnose and manage diseases affecting the joints, muscles, bones, and immune system. This includes rheumatoid arthritis, lupus, gout, ankylosing spondylitis, psoriatic arthritis, osteoporosis, vasculitis, myositis, Sjögren\'s syndrome, and many other autoimmune and musculoskeletal conditions.',
  },
  {
    id: 2,
    question: 'Do I need a referral to see Dr. Kamble?',
    answer: 'No referral is required. You can book an appointment directly through this website or by calling the clinic. However, bringing previous medical records, blood test results, and imaging (X-rays, MRI) from your GP or other specialists will help us make the most of your consultation.',
  },
  {
    id: 3,
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring your ABHA/health ID, a list of current medications, any recent blood tests or imaging reports, and a record of your symptoms including when they started and how they have changed over time. If you have seen other doctors for the same issue, bring those reports too.',
  },
  {
    id: 4,
    question: 'How long does a consultation take?',
    answer: 'New patient consultations are typically 30–45 minutes. Follow-up visits are generally 15–30 minutes. Complex cases or those requiring a detailed review of investigations may require longer. Please arrive a few minutes early to complete any necessary paperwork.',
  },
  {
    id: 5,
    question: 'Does Dr. Kamble offer teleconsultation?',
    answer: 'Yes. Teleconsultations are available for follow-up visits, review of investigations, and second opinions. New patients are encouraged to visit in person for the initial assessment, as a physical examination is often essential for accurate diagnosis. Please call or book online to check availability.',
  },
  {
    id: 6,
    question: 'Which insurance plans are accepted?',
    answer: 'We accept most major health insurance plans including Star Health, HDFC Ergo, Bajaj Allianz, United Health, and government schemes including CGHS and ECHS. Please contact the clinic to verify coverage before your appointment.',
  },
]

// ─── Clinic Info ──────────────────────────────────────────────────────────────
export const clinic = {
  name: 'Pune Rheumatology & Arthritis Centre',
  address: '302, Medipoint Building, Nagar Road, Viman Nagar, Pune – 411014',
  phone: '+91 98220 XXXXX',
  email: 'appointments@drkamble.in',
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 1:00 PM, 4:00 PM – 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 1:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
}
