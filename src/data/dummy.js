import rheumatoidArthritisImg from '../assets/Services_Images/Rheumatoid arthritis .png'
import lupusImg from '../assets/Services_Images/Lupus .png'
import vasculitisImg from '../assets/Services_Images/Vasculitis Arthritis.png'
import psoriaticArthritisImg from '../assets/Services_Images/Psoriatic Arthritis.jpeg'
import sjogrensImg from '../assets/Services_Images/Sjogrens Disease.jpeg'
import osteoarthritisImg from '../assets/Services_Images/Osteoarthritis.jpeg'
import myositisImg from '../assets/Services_Images/Inflammatory Myositis.png'
import reactiveArthritisImg from '../assets/Services_Images/Reactive Arthritis.jpeg'
import juvenileIdiopathicArthritisImg from '../assets/Services_Images/Juvenile Idiopathic Arthritis.png'
import undifferentiatedconnectivetissuediseaseImg from '../assets/Services_Images/undifferentiated-connective-tissue-disease.png'
import behcetsImg from '../assets/Services_Images/Behcets Disease.png'
import igG4relateddisease from '../assets/Services_Images/IgG4-Related Disease.png'
import osteoporosis from '../assets/Services_Images/Osteoporosis.png'
import systemicsclerosis from '../assets/Services_Images/Systemic sclerosis.png'
import enteropathic from '../assets/Services_Images/Enteropathic .png'
import mixedconnectivetissuedisease from '../assets/Services_Images/Mixed connective tissue disease.png'
import fibromyalgia from '../assets/Services_Images/Fibromyalgia.png'
import antiphospholipidsyndrome from '../assets/Services_Images/Antiphospholipid syndrome.png'
import raynaudsphenomenon from '../assets/Services_Images/Raynaud’s phenomenon.png'
import sarcoidosis from '../assets/Services_Images/Sarcoidosis.png'
import gout from '../assets/Services_Images/Gout.png'
import ankylosingspondylitis from '../assets/Services_Images/Ankylosing spondylitis.png'



// ─── Doctor ───────────────────────────────────────────────────────────────────
export const doctor = {
  name: 'Dr. Nishant Kamble',
  shortName: 'Dr. Nishant',
  title: 'MBBS, MD(General Medicine), DM (Clinical Immunology & Rheumatology), SCE Rheumatology(RCP, UK), EULAR Certified',
  specialty: 'Consultant Rheumatologist & Clinical Immunologist',
  hospital: 'Rheumatology and Autoimmune Disease Clinic',
  experience: 12,
  patients: 20000,
  bio: `Dr. Nishant Kamble is a highly qualified Rheumatologist and Clinical Immunologist dedicated to the diagnosis and management of autoimmune, inflammatory, and musculoskeletal diseases. He completed his MBBS from Government Medical College, Nagpur, followed by MD in General Medicine from Dr. S.N. Medical College, Jodhpur. He further pursued superspecialty training in Clinical Immunology and Rheumatology (DM) from the prestigious King George's Medical University (KGMU), Lucknow.

To further strengthen his expertise, Dr. Kamble has successfully completed the Specialty Certificate Examination (SCE) in Rheumatology conducted by the Royal College of Physicians, United Kingdom, and is EULAR (European Alliance of Associations for Rheumatology) Certified.

With extensive academic and clinical experience, Dr. Kamble has served as Senior Resident and Assistant Professor in the Department of Medicine at Government Medical College, Nagpur. He has also worked as Assistant Professor in the Department of Clinical Immunology and Rheumatology, contributing to patient care, teaching, and academic research.

Dr. Kamble specializes in the management of Rheumatoid Arthritis, Ankylosing Spondylitis, Psoriatic Arthritis, Systemic Lupus Erythematosus (SLE), Sjögren's Syndrome, Vasculitis, Myositis, Systemic Sclerosis, Osteoporosis, Gout, and other complex autoimmune and connective tissue disorders. His clinical approach emphasizes accurate diagnosis, evidence-based treatment, patient education, and long-term disease control.

Known for his compassionate care and attention to detail, Dr. Kamble believes in building lasting relationships with patients and helping them navigate chronic rheumatic diseases with confidence and optimism.

Dr. Kamble currently serves as a Visiting Consultant Rheumatologist at KIMS-Kingsway Hospital, KRIMS Hospitals, Shankara Superspeciality Hospital, and Taywade Hospital, Nagpur, providing advanced rheumatology care across Central India.`,
  qualifications: [
    { degree: 'MBBS', institution: 'Govt. Medical College and Hospital, Nagpur'},
    { degree: 'MD (General Medicine)', institution: 'Dr. SNMC & MDM Hospital, Jodhpur'},
    { degree: 'DM (Clinical Immunology and and Rheumatology)', institution: 'King George Medical University, Lucknow'},
    { degree: 'SCE Rheumatology', institution: 'RCP , UK'},
    // { degree: 'EULAR certified in Rheumatic Diseases, Pediatric Rheumatology and Musculoskeletal Ultrasound'},
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
    image: rheumatoidArthritisImg,
    description: 'Rheumatoid Arthritis is a chronic autoimmune disease in which the immune system mistakenly attacks the joints, causing pain, swelling, stiffness, and fatigue. If left untreated, it can lead to joint damage and disability. Early diagnosis and modern treatment can help patients maintain an active and productive life.',
    duration: 30,
  },
  {
    id: 2,
    slug: 'systemic-lupus-erythematosus-(sle-/lupus)',
    title: 'Systemic Lupus Erythematosus (SLE / Lupus)',
    icon: '🔬',
    image: lupusImg,
    description: 'Lupus is a complex autoimmune disease that can affect multiple organs including the skin, joints, kidneys, lungs, heart, brain, and blood cells. Symptoms vary widely between individuals. Regular monitoring and specialized care are essential for effective disease control.',
    duration: 30,
  },
  {
    id: 3,
    slug: 'ankylosing-spondylitis',
    title: 'Ankylosing Spondylitis',
    icon: '🫀',
    image: ankylosingspondylitis,
    description: 'Ankylosing Spondylitis is a type of inflammatory arthritis that mainly affects the spine and sacroiliac joints. It commonly presents with chronic back pain and morning stiffness in young adults. Early treatment can reduce symptoms, improve mobility, and prevent long-term complications.',
    duration: 30,
  },
  {
    id: 4,
    slug: 'gout',
    title: 'Gout',
    icon: '💊',
    image: gout,
    description: 'Gout is a common and highly treatable form of arthritis caused by the accumulation of uric acid crystals within the joints. It typically presents with sudden attacks of severe pain, swelling, redness, and tenderness, often affecting the big toe.',
    duration: 20,
  },
  {
    id: 5,
    slug: 'osteoporosis',
    title: 'Osteoporosis & Bone Health',
    icon: '🩻',
    image: osteoporosis,
    description: 'Osteoporosis is a condition characterized by decreased bone strength, making bones fragile and susceptible to fractures. It often develops silently and may remain unnoticed until a fracture occurs. Early screening and treatment can significantly reduce fracture risk.',
    duration: 30,
  },
  {
    id: 6,
    slug: 'vasculitis',
    title: 'Vasculitis & Rare Disorders',
    icon: '🧬',
    image: vasculitisImg,
    description: 'Vasculitis refers to a group of diseases that cause inflammation of blood vessels. Depending on the vessels involved, it may affect the skin, kidneys, lungs, nerves, eyes, or other organs. Early diagnosis is crucial to prevent permanent organ damage.',
    duration: 45,
  },
  {
    id: 7,
    slug: 'psoriatic-arthritis',
    title: 'Psoriatic Arthritis',
    icon: '🌿',
    image: psoriaticArthritisImg,
    description: 'Psoriatic Arthritis is an inflammatory joint disease associated with psoriasis, a skin condition characterized by scaly patches. It can affect joints, tendons, ligaments, and the spine. Timely diagnosis and treatment help prevent joint damage and improve quality of life.',
    duration: 30,
  },
  {
    id: 8,
    slug: 'sjogrens-syndrome',
    title: 'Sjögren\'s Syndrome',
    icon: '💧',
    image: sjogrensImg,
    description: 'Sjögren\'s Syndrome is an autoimmune condition that primarily affects the glands responsible for producing tears and saliva, leading to dry eyes and dry mouth. Some patients may also experience joint pain, fatigue, nerve involvement, or lung disease.',
    duration: 30,
  },
  {
    id: 9,
    slug: 'osteoarthritis',
    title: 'Osteoarthritis',
    icon: '🦿',
    image: osteoarthritisImg,
    description: 'Osteoarthritis is the most common form of arthritis and occurs due to gradual wear and tear of joint cartilage. It commonly affects the knees, hips, hands, and spine, causing pain, stiffness, and reduced joint function over time.',
    duration: 25,
  },
  {
    id: 10,
    slug: 'systemic-sclerosis',
    title: 'Systemic Sclerosis',
    icon: '🧠',
    image: systemicsclerosis,
    description: 'Systemic Sclerosis is a rare autoimmune disease that causes thickening and hardening of the skin. It may also affect internal organs such as the lungs, heart, kidneys, and digestive tract, requiring comprehensive long-term management.',
    duration: 45,
  },
  {
    id: 11,
    slug: 'inflammatory-myositis',
    title: 'Inflammatory Myositis',
    icon: '💪',
    image: myositisImg,
    description: 'Inflammatory Myositis is a group of autoimmune disorders that cause muscle inflammation and weakness. Patients may experience difficulty climbing stairs, rising from a chair, or lifting objects. Early treatment can improve muscle strength and function.',
    duration: 35,
  },
  {
    id: 12,
    slug: 'mixed-connective-tissue-disease',
    title: 'Mixed Connective Tissue Disease',
    icon: '🧪',
    image: mixedconnectivetissuedisease,
    description: 'Mixed Connective Tissue Disease is an autoimmune overlap syndrome with features of lupus, scleroderma, and inflammatory muscle disease. Symptoms vary from person to person and often require individualized treatment and long-term follow-up.',
    duration: 40,
  },
  {
    id: 13,
    slug: 'reactive-arthritis',
    title: 'Reactive Arthritis',
    icon: '🩺',
    image: reactiveArthritisImg,
    description: 'Reactive Arthritis is an inflammatory joint condition that develops after certain bacterial infections, commonly involving the gastrointestinal or urinary tract. It can cause joint pain, eye inflammation, and urinary symptoms.',
    duration: 30,
  },
  {
    id: 14,
    slug: 'enteropathic-arthritis',
    title: 'Enteropathic Arthritis',
    icon: '🧫',
    image: enteropathic,
    description: 'Enteropathic Arthritis is associated with inflammatory bowel diseases such as Crohn\'s disease and ulcerative colitis. Patients may experience both digestive symptoms and joint inflammation, requiring coordinated care between specialists.',
    duration: 30,
  },
  {
    id: 15,
    slug: 'juvenile-idiopathic-arthritis',
    title: 'Juvenile Idiopathic Arthritis',
    icon: '🧒',
    image: juvenileIdiopathicArthritisImg,
    description: 'Juvenile Idiopathic Arthritis is the most common chronic rheumatic disease affecting children. It causes persistent joint inflammation, pain, swelling, and stiffness. Early diagnosis and treatment are important to ensure normal growth and development.',
    duration: 35,
  },
  {
    id: 16,
    slug: 'fibromyalgia',
    title: 'Fibromyalgia',
    icon: '🌙',
    image: fibromyalgia,
    description: 'Fibromyalgia is a chronic pain syndrome characterized by widespread body pain, fatigue, sleep disturbances, and difficulties with concentration and memory. Although it does not cause joint damage, it can significantly impact daily life and well-being.',
    duration: 25,
  },
  {
    id: 17,
    slug: 'behcets-disease',
    title: 'Behçet\'s Disease',
    icon: '🗣️',
    image: behcetsImg,
    description: 'Behçet\'s Disease is a rare inflammatory disorder characterized by recurrent mouth ulcers, genital ulcers, skin lesions, and eye inflammation. In some cases, it may also involve blood vessels, the nervous system, or the gastrointestinal tract.',
    duration: 40,
  },
  {
    id: 18,
    slug: 'antiphospholipid-syndrome',
    title: 'Antiphospholipid Syndrome',
    icon: '🩸',
    image: antiphospholipidsyndrome,
    description: 'Antiphospholipid Syndrome is an autoimmune condition that increases the risk of blood clot formation. It can lead to deep vein thrombosis, stroke, recurrent pregnancy loss, and other complications. Early recognition and treatment are essential.',
    duration: 35,
  },
  {
    id: 19,
    slug: 'undifferentiated-connective-tissue-disease',
    title: 'Undifferentiated CTD',
    icon: '🧬',
    image: undifferentiatedconnectivetissuediseaseImg,
    description: 'UCTD refers to autoimmune conditions that show features of connective tissue disease but do not meet the criteria for a specific diagnosis. Regular monitoring helps identify disease progression and guides appropriate treatment.',
    duration: 30,
  },
  {
    id: 20,
    slug: 'raynauds-phenomenon',
    title: 'Raynaud\'s Phenomenon',
    icon: '❄️',
    image: raynaudsphenomenon,
    description: 'Raynaud\'s Phenomenon causes episodes of reduced blood flow to the fingers and toes, leading to color changes, numbness, and discomfort in response to cold temperatures or emotional stress. It may occur alone or as part of another autoimmune disease.',
    duration: 25,
  },
  {
    id: 21,
    slug: 'igg4-related-disease',
    title: 'IgG4-Related Disease',
    icon: '🫁',
    image: igG4relateddisease,
    description: 'IgG4-Related Disease is a chronic inflammatory condition that can affect multiple organs including the pancreas, salivary glands, kidneys, lungs, and lymph nodes. Early diagnosis can help prevent permanent organ damage.',
    duration: 40,
  },
  {
    id: 22,
    slug: 'sarcoidosis',
    title: 'Sarcoidosis',
    icon: '🫧',
    image: sarcoidosis,
    description: 'Sarcoidosis is an inflammatory disease characterized by the formation of granulomas in various organs, most commonly the lungs, lymph nodes, skin, and eyes. Symptoms vary widely and may require specialized multidisciplinary care.',
    duration: 35,
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
  
]

// ─── Clinic Info ──────────────────────────────────────────────────────────────
export const clinic = {
  name: 'Nagpur Rheumatology & Arthritis Centre',
  address: '3rd floor, Shar hari Complex, Block number 31, Central Bazar Road, near RBL Bank, opposite to Somalwar School, Ramdaspeth, Nagpur, Maharashtra 440010',
  phone: '+91 7756842639',
  email: 'dr.nkamble7@gmail.com',
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 1:00 PM, 4:00 PM – 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 1:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
}