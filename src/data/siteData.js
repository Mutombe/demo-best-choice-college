export const designTokens = {
  heroStyle: "scattered",
  typography: {
    heading: "Inter",
    body: "Source Sans 3",
    display: "JetBrains Mono",
  },
  effects: {
    noise: false,
    glassmorphism: "none",
    floatingShapes: true,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "carousel",
  testimonialStyle: "slider",
  statsStyle: "icon-boxes",
  bgPattern: "dots",
  homeSectionOrder: [
    "hero", "services", "stats", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Best Choice College", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    legalName: "Best Choice College (Pvt) Ltd",
    tagline: "Your Brightest Future Starts Here",
    description:
      "Best Choice College is Harare's premier destination for career-focused education. We transform ambitious students into industry-ready professionals through hands-on training, expert lecturers, and qualifications that open doors.",
    phone: "+263 77 325 1172",
    phoneRaw: "+263773251172",
    whatsappNumber: "263773251172",
    email: "info@bestchoicecollege.co.zw",
    address: "45th St, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 13,
    established: "2012",
    yearsExperience: "13+",
    projectsCompleted: "8,000+",
    employees: "60+",
    coordinates: { lat: -17.8831338, lng: 30.9862902 },
    hours: [
      { day: "Monday - Saturday", time: "Open 24 Hours" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d30.9862902!3d-17.8831338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDUyJzU5LjMiUyAzMMKwNTknMTAuNiJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "best-choice-college-cookie-consent",
    socialLinks: { facebook: "#", linkedin: "#", instagram: "#" },
  },

  navbar: { logoLine1: "Best Choice", logoLine2: "College" },

  hero: {
    badge: "Rated 4.8/5 by Our Students",
    titleParts: [
      { text: "Make the " },
      { text: "Best Choice", highlight: true },
      { text: " for Your Career" },
    ],
    subtitle:
      "Diploma and certificate programmes that do not just teach theory. We build professionals who walk into interviews with confidence, competence, and credentials that employers trust.",
    ctaPrimary: "Enrol Today",
    ctaSecondary: "Browse Courses",
    trustBadge: "HEXCO & ICM Accredited",
    backgroundImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400",
    backgroundAlt: "Students studying at Best Choice College",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400", alt: "Diverse students collaborating on campus" },
      { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1400", alt: "Modern classroom with engaged learners" },
      { url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1400", alt: "College campus building entrance" },
    ],
  },

  stats: [
    { number: "8,000+", label: "Graduates Placed" },
    { number: "13+", label: "Years of Excellence" },
    { number: "25+", label: "Accredited Courses" },
    { number: "95%", label: "Pass Rate" },
  ],

  servicesPreview: [
    { iconName: "CurrencyDollar", title: "Accounting & Finance", desc: "HEXCO and ICM-accredited programmes that produce job-ready accountants, bookkeepers, and finance professionals." },
    { iconName: "Lightbulb", title: "Information Technology", desc: "From networking to software development, our IT programmes equip you with certifications the tech industry demands." },
    { iconName: "Briefcase", title: "Business Management", desc: "Learn to lead, strategise, and execute. Build the entrepreneurial and management skills that drive success." },
    { iconName: "Heart", title: "Health Sciences", desc: "Nursing aide, pharmacy technician, and health studies programmes opening doors to Zimbabwe's healthcare sector." },
    { iconName: "GraduationCap", title: "Secretarial & Office Admin", desc: "Master professional administration. Typing, shorthand, office management, and executive support skills." },
    { iconName: "ChartLineUp", title: "Marketing & Sales", desc: "Digital marketing, sales psychology, and brand management. We train the people who drive revenue." },
  ],

  featuredProjects: [
    { image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", title: "2024 Graduation Ceremony", category: "Student Achievement" },
    { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", title: "New Computer Lab Launch", category: "Infrastructure" },
    { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", title: "Corporate Partnership Forum", category: "Industry Links" },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "The " },
      { text: "Best", highlight: true },
      { text: " Choice Is Clear" },
    ],
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
    imageAlt: "Students in a practical training session at Best Choice College",
    experienceYears: "95%",
    experienceLabel: "Graduate Pass Rate",
    points: [
      { title: "Industry-Ready Graduates", desc: "Our curriculum is built with employers, not just for them. Students graduate with the exact skills hiring managers seek." },
      { title: "Flexible Study Options", desc: "Full-time, part-time, and evening classes. We fit around your life because education should not require you to stop living." },
      { title: "Affordable Excellence", desc: "Premium education at accessible fees. Payment plans and scholarships ensure talent is never held back by finances." },
      { title: "Job Placement Support", desc: "Our career services team actively connects graduates with employers. We do not just hand you a certificate, we help you land the job." },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1400",
    backgroundAlt: "Best Choice College campus environment",
    titleParts: [
      { text: "Your Career " },
      { text: "Deserves", highlight: true },
      { text: " the Best Choice" },
    ],
    subtitle: "Enrolment for our next intake is open. Step into a college that has helped 8,000+ students launch successful careers.",
    ctaPrimary: "Enrol Now",
    whatsappText: "Hello Best Choice College! I am interested in enrolling. Please share available courses and fees.",
  },

  homeTestimonials: [
    { name: "Tinashe Banda", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", role: "Accounting Diploma Graduate", text: "Best Choice College changed my life. I came with zero accounting knowledge and left with an ICM diploma and a job offer from a top accounting firm. The lecturers genuinely care.", rating: 5 },
    { name: "Nyasha Mlambo", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", role: "IT Certificate Graduate", text: "The practical approach to teaching is what sets this college apart. We did not just read about networking, we built networks in the lab. Employed within two weeks of graduating.", rating: 5 },
    { name: "Chiedza Mapanga", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", role: "Business Management Student", text: "The evening classes are perfect for working professionals. The lecturers are experienced business people who bring real-world examples into every lesson. Worth every dollar.", rating: 5 },
  ],

  about: {
    heroTitle: [{ text: "Where Ambition " }, { text: "Meets", highlight: true }, { text: " Opportunity" }],
    heroSubtitle: "For over a decade, Best Choice College has been transforming ambitious Zimbabweans into confident, skilled professionals.",
    storyImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
    storyImageAlt: "Best Choice College students in class",
    storyProjectCount: "8,000+",
    storyProjectLabel: "Graduates Placed",
    storyTitle: "From a Single Classroom to Harare's Most Trusted College.",
    storyParagraphs: [
      "Best Choice College was founded in 2012 with a powerful belief: every Zimbabwean deserves access to quality, affordable, career-focused education.",
      "Our approach has always been different. We do not teach for exams. We teach for careers. Every programme is designed in consultation with employers.",
      "Today, Best Choice College offers over 25 accredited programmes. Our alumni network includes accountants, IT managers, health practitioners, and entrepreneurs.",
    ],
    mission: "To provide accessible, industry-aligned education that equips every student with the skills, confidence, and credentials to build a successful career.",
    vision: "To be Zimbabwe's most trusted vocational college, recognised for producing graduates who are immediately employable and entrepreneurially minded.",
    values: [
      { iconName: "Star", title: "Excellence", desc: "We pursue the highest standards in teaching and student support." },
      { iconName: "Users", title: "Accessibility", desc: "Quality education should be affordable and flexible enough to accommodate diverse needs." },
      { iconName: "Lightbulb", title: "Innovation", desc: "We continuously update our curriculum and methods to stay ahead of industry trends." },
      { iconName: "Handshake", title: "Integrity", desc: "Honest, transparent, and ethical in every interaction." },
      { iconName: "Rocket", title: "Employability", desc: "Everything we do is measured against one question: will this help our students get jobs?" },
      { iconName: "Heart", title: "Student-Centric", desc: "Our students are individuals with unique goals, and we tailor our support accordingly." },
    ],
    team: [
      { name: "Mr. Tafadzwa Chiwanda", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", role: "College Principal", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
      { name: "Mrs. Rumbidzai Moyo", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", role: "Academic Dean", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Mr. Blessing Ncube", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", role: "Head of IT Department", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
      { name: "Ms. Tendai Mhaka", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", role: "Student Affairs Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
    ],
    milestones: [
      { year: "2012", title: "College Founded", desc: "Best Choice College opens with 3 programmes and a mission to transform vocational education." },
      { year: "2014", title: "HEXCO Accreditation", desc: "Full accreditation from the Higher Education Examinations Council." },
      { year: "2016", title: "ICM Partnership", desc: "Became an accredited ICM centre for internationally recognised qualifications." },
      { year: "2018", title: "1,000th Graduate", desc: "Celebrated milestone with over 80% of graduates successfully placed." },
      { year: "2021", title: "Digital Campus", desc: "Launch of blended learning platform extending access across Zimbabwe." },
      { year: "2024", title: "8,000+ Alumni", desc: "Sustained 95% pass rate and growing employer partnerships." },
    ],
    ctaTitle: "Ready to Make the Best Choice?",
    ctaSubtitle: "Enrolment is open. Take the first step toward a career you will love.",
    ctaCta: "Start Your Application",
  },

  services: {
    heroTitle: [{ text: "Courses That " }, { text: "Build", highlight: true }, { text: " Careers" }],
    heroSubtitle: "Every programme is designed with one outcome in mind: your employment.",
    items: [
      { iconName: "CurrencyDollar", title: "Accounting & Finance", slug: "accounting-finance", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800", desc: "Master the language of business with our HEXCO and ICM-accredited accounting programmes.", features: ["HEXCO National Diploma and Certificate options", "ICM internationally recognised qualifications", "Practical accounting software training (Pastel, QuickBooks)", "Industry attachment with leading firms", "Evening and weekend classes available", "98% pass rate in professional exams"] },
      { iconName: "Lightbulb", title: "Information Technology", slug: "information-technology", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800", desc: "From networking to web development and cybersecurity, prepare for Zimbabwe's fastest-growing sector.", features: ["CompTIA A+, N+, and Security+ preparation", "Cisco networking fundamentals and lab practice", "Web development and database management", "State-of-the-art computer laboratories", "Industry partnerships with leading tech companies", "Hands-on project-based assessment"] },
      { iconName: "Briefcase", title: "Business Management", slug: "business-management", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", desc: "Strategic thinking and management skills to climb the corporate ladder or launch your own venture.", features: ["HEXCO National Diploma in Business Management", "ICM Diploma in Business Administration", "Entrepreneurship and business plan development", "Human resource management modules", "Guest lectures from business leaders", "Practical case study methodology"] },
      { iconName: "Heart", title: "Health Sciences", slug: "health-sciences", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800", desc: "Enter Zimbabwe's booming healthcare sector with practical training in real clinical settings.", features: ["Nursing aide certificate with clinical placement", "Pharmacy technician diploma programme", "Community health worker certification", "First aid and emergency response training", "Partnerships with hospitals and clinics", "Pathways to advanced healthcare qualifications"] },
      { iconName: "GraduationCap", title: "Secretarial & Office Admin", slug: "secretarial-office-admin", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", desc: "The backbone of every successful organisation. Polished, efficient professionals who keep businesses running.", features: ["HEXCO National Diploma in Secretarial Studies", "Professional typing and shorthand certification", "Microsoft Office Suite mastery", "Office management and administration", "Business communication and etiquette", "Executive PA skills and event coordination"] },
      { iconName: "ChartLineUp", title: "Marketing & Sales", slug: "marketing-sales", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800", desc: "Master digital marketing, brand management, consumer psychology, and sales strategy.", features: ["Digital marketing and social media management", "Sales psychology and negotiation techniques", "Brand management and corporate communications", "Market research and data analysis", "ICM Diploma in Marketing", "Live projects with local businesses"] },
    ],
    ctaTitle: "Find Your Course",
    ctaSubtitle: "Our advisors are here to help you choose the path to your ideal career.",
  },

  projects: {
    heroTitle: [{ text: "Student " }, { text: "Success", highlight: true }, { text: " Stories" }],
    heroSubtitle: "Milestones and achievements that make Best Choice College a launchpad for successful careers.",
    categories: ["All", "Student Achievement", "Infrastructure", "Industry Links", "Community", "Innovation"],
    items: [
      { id: 1, title: "2024 Graduation Ceremony", category: "Student Achievement", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", desc: "Over 500 graduates received diplomas and certificates, with 85% already placed in employment.", services: ["Accounting", "IT", "Business Management"] },
      { id: 2, title: "New Computer Lab Launch", category: "Infrastructure", location: "Harare Campus", year: "2024", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", desc: "50-seat computer laboratory with the latest hardware and software for practical IT training.", services: ["IT Infrastructure", "Lab Design"] },
      { id: 3, title: "Corporate Partnership Forum", category: "Industry Links", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", desc: "Connecting students with 30+ employers for internship and job placement opportunities.", services: ["Career Services", "Employer Relations"] },
      { id: 4, title: "Community Skills Workshop", category: "Community", location: "Mbare, Harare", year: "2023", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", desc: "Free digital literacy and basic accounting workshops for out-of-school youth.", services: ["Community Outreach", "Digital Literacy"] },
      { id: 5, title: "Student Startup Competition", category: "Innovation", location: "Harare Campus", year: "2023", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800", desc: "Annual entrepreneurship competition with pitches to investors and business leaders.", services: ["Entrepreneurship", "Mentorship"] },
      { id: 6, title: "ICM International Recognition", category: "Student Achievement", location: "United Kingdom", year: "2023", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800", desc: "Highest ICM pass rates in Zimbabwe for three consecutive years.", services: ["Academic Excellence", "Quality Assurance"] },
    ],
  },

  reviews: {
    heroTitle: [{ text: "What Our " }, { text: "Students", highlight: true }, { text: " Say" }],
    heroSubtitle: "Real feedback from real students. Our 4.8-star rating represents thousands of lives transformed.",
    ratingBreakdown: [{ stars: 5, count: 9 }, { stars: 4, count: 3 }, { stars: 3, count: 1 }, { stars: 2, count: 0 }, { stars: 1, count: 0 }],
    items: [
      { name: "Tinashe Banda", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face", role: "Accounting Graduate", text: "Best Choice College changed my life. I came with zero accounting knowledge and left with an ICM diploma and a job offer.", rating: 5, date: "2024-09-10", project: "Accounting Diploma" },
      { name: "Nyasha Mlambo", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face", role: "IT Graduate", text: "We did not just read about networking, we built networks in the lab. Employed within two weeks of graduating.", rating: 5, date: "2024-08-22", project: "IT Certificate" },
      { name: "Chiedza Mapanga", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&h=100&fit=crop&crop=face", role: "Business Student", text: "Evening classes perfect for working professionals. Lecturers bring real-world examples into every lesson.", rating: 5, date: "2024-07-15", project: "Business Management" },
      { name: "Takudzwa Chirume", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face", role: "Marketing Graduate", text: "I learned more about digital marketing in 6 months here than in 3 years of self-study.", rating: 5, date: "2024-06-18", project: "Marketing Diploma" },
      { name: "Ruvimbo Chikore", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face", role: "Secretarial Graduate", text: "My typing speed went from 20 to 65 words per minute. The office management training gave me confidence.", rating: 4, date: "2024-05-20", project: "Secretarial Studies" },
      { name: "Farai Mutenha", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face", role: "Health Sciences Student", text: "The nursing aide programme is hands-on. Clinical placements at real hospitals gave me confidence in patient care.", rating: 5, date: "2024-04-12", project: "Nursing Aide" },
      { name: "Memory Gava", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face", role: "Accounting Student", text: "The Pastel and QuickBooks training is invaluable. Most colleges only teach theory, but Best Choice teaches the software employers require.", rating: 5, date: "2024-03-08", project: "Accounting Certificate" },
      { name: "Kudzai Dhliwayo", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", role: "IT Graduate", text: "I passed my CompTIA A+ on the first attempt. The lab facilities are among the best in Harare.", rating: 4, date: "2024-02-15", project: "IT Diploma" },
      { name: "Tsitsi Chitauro", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face", role: "Business Graduate", text: "The lecturers know your name, follow up on your progress, and the career services team actually helps you find work.", rating: 5, date: "2024-01-22", project: "Business Management" },
      { name: "Tonderai Mupfupi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", role: "Marketing Student", text: "The social media marketing module alone was worth the entire course fee. I now manage social media for three businesses.", rating: 5, date: "2023-12-10", project: "Marketing Certificate" },
      { name: "Grace Hungwe", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", role: "Secretarial Graduate", text: "I was unemployed for two years before enrolling. Within three months of graduating, I was working as an executive PA.", rating: 5, date: "2023-11-05", project: "Executive PA Programme" },
      { name: "Simba Choto", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", role: "Accounting Graduate", text: "The lecturers are not just teachers, they are mentors. Forever grateful for the extra help with tax computations.", rating: 4, date: "2023-10-18", project: "Accounting Diploma" },
      { name: "Vimbai Makoni", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", role: "Health Sciences Graduate", text: "The pharmacy technician programme opened doors I never thought possible. Now working at a leading pharmaceutical company.", rating: 5, date: "2023-09-28", project: "Pharmacy Technician" },
      { name: "Tatenda Gomo", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", role: "IT Student", text: "HTML, CSS, JavaScript, PHP, all taught with real projects. I built a portfolio that landed my first freelance client.", rating: 5, date: "2023-08-14", project: "Web Development" },
      { name: "Patience Mukwena", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", role: "Business Student", text: "Affordable without compromising quality. The payment plans made it possible to study without financial stress.", rating: 4, date: "2023-07-22", project: "Business Administration" },
      { name: "Anesu Dube", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", role: "Accounting Graduate", text: "Three years after graduating, I am now a finance manager. The practical skills I learned still serve me every day.", rating: 5, date: "2023-06-30", project: "Advanced Accounting" },
      { name: "Blessing Zhakata", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", role: "IT Graduate", text: "The Cisco networking training was exceptional. Real routers, real switches, and lecturers from the industry.", rating: 5, date: "2023-05-15", project: "Networking Certificate" },
    ],
    ctaTitle: "Experience the Best Choice Difference",
    ctaSubtitle: "Join thousands of students who made the best choice for their careers.",
    ctaCta: "Enrol Today",
    ctaWhatsappText: "Hello Best Choice College! I read the student reviews and I am interested in enrolling.",
  },

  contact: {
    heroTitle: [{ text: "Let's " }, { text: "Talk", highlight: true }],
    heroSubtitle: "Ready to make the best choice for your future? Our admissions team is here to guide you.",
    formTitle: "Send Us a Message",
    formSubtitle: "Fill in the form and we will get back to you within 24 hours.",
  },

  careers: {
    heroTitle: [{ text: "Teach With " }, { text: "Us", highlight: true }],
    heroSubtitle: "Join passionate educators who believe in transforming lives through quality education.",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400",
    cultureTitle: "Life at Best Choice College",
    cultureItems: [
      { iconName: "Heart", title: "Passion for Teaching", desc: "Our lecturers are mentors who transform lives." },
      { iconName: "ChartLineUp", title: "Growth Opportunities", desc: "Professional development funding and clear career progression." },
      { iconName: "Users", title: "Team Spirit", desc: "A supportive, collaborative environment focused on student success." },
    ],
    cultureImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    cultureImageAlt: "Best Choice College staff meeting",
    cultureTagline: "Where Educators Make Impact",
    cultureTaglineDesc: "Your work directly changes lives. See your students succeed and know you played a part.",
    benefits: [
      { iconName: "CurrencyDollar", title: "Competitive Salary", desc: "Above-market compensation with performance bonuses." },
      { iconName: "Heart", title: "Medical Aid", desc: "Comprehensive medical coverage for staff and dependents." },
      { iconName: "GraduationCap", title: "Study Benefits", desc: "Free access to college programmes for staff and family." },
      { iconName: "Clock", title: "Flexible Hours", desc: "Teaching schedules that respect work-life balance." },
      { iconName: "Rocket", title: "Professional Development", desc: "Funded training and conference attendance." },
      { iconName: "ShieldCheck", title: "Job Security", desc: "Stable employment with clear contracts." },
    ],
    positions: [
      { id: 1, title: "Lecturer - Accounting & Finance", department: "Commerce", type: "Full-Time", location: "Harare", description: "Deliver HEXCO and ICM accounting courses and mentor students.", requirements: ["Degree in Accounting or Finance", "Professional qualification preferred", "2+ years teaching/industry experience", "Pastel and QuickBooks proficiency"] },
      { id: 2, title: "IT Instructor", department: "Technology", type: "Full-Time", location: "Harare", description: "Teach networking, web development, and cybersecurity modules.", requirements: ["Degree/diploma in IT", "CompTIA or Cisco certifications preferred", "Practical industry experience", "Current knowledge of IT trends"] },
      { id: 3, title: "Student Recruitment Officer", department: "Marketing", type: "Full-Time", location: "Harare", description: "Drive student enrolment through school visits, fairs, and digital marketing.", requirements: ["Marketing degree/diploma", "2+ years in sales or recruitment", "Excellent presentation skills", "Driver's licence"] },
      { id: 4, title: "Clinical Placement Coordinator", department: "Health Sciences", type: "Part-Time", location: "Harare", description: "Coordinate student clinical placements at partner hospitals.", requirements: ["Nursing or health sciences qualification", "3+ years clinical experience", "Hospital relationships", "Supervisory experience"] },
    ],
    generalApplicationTitle: "Do Not See Your Role?",
    generalApplicationSubtitle: "Send us your CV and tell us how you would contribute to student success.",
    generalApplicationCta: "Submit Your Application",
  },

  footer: {
    description: "Best Choice College offers HEXCO and ICM-accredited programmes in accounting, IT, business, health sciences, and more. Your brightest future starts here.",
    copyright: "2025 Best Choice College. All rights reserved.",
  },
};

export default siteData;
