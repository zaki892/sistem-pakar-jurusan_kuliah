// Expert System Logic for College Major Recommendation

export interface UserProfile {
  academicInterests: string[]
  talents: string[]
  personality: string[]
  careerAspirations: string[]
}

export interface Major {
  id: string
  name: string
  description: string
  matchScore: number
  careerProspects: string[]
  averageSalary: string
  jobGrowth: string
  requiredSkills: string[]
  universities: string[]
}

// Knowledge base of college majors
const majorsDatabase: Omit<Major, "matchScore">[] = [
  {
    id: "computer-science",
    name: "Teknik Informatika",
    description: "Mempelajari pemrograman, algoritma, dan sistem komputer untuk mengembangkan solusi teknologi.",
    careerProspects: ["Software Developer", "Data Scientist", "Cybersecurity Analyst", "AI Engineer"],
    averageSalary: "Rp 8-25 juta/bulan",
    jobGrowth: "22% (Sangat Tinggi)",
    requiredSkills: ["Logika", "Problem Solving", "Matematika", "Kreativitas Teknis"],
    universities: ["ITB", "UI", "UGM", "ITS", "Binus"],
  },
  {
    id: "medicine",
    name: "Kedokteran",
    description: "Mempelajari ilmu kesehatan dan pengobatan untuk menjadi dokter profesional.",
    careerProspects: ["Dokter Umum", "Dokter Spesialis", "Peneliti Medis", "Konsultan Kesehatan"],
    averageSalary: "Rp 10-50 juta/bulan",
    jobGrowth: "15% (Tinggi)",
    requiredSkills: ["Empati", "Analitis", "Komunikasi", "Ketahanan Mental"],
    universities: ["UI", "UGM", "Unair", "Undip", "USU"],
  },
  {
    id: "business-management",
    name: "Manajemen Bisnis",
    description: "Mempelajari strategi bisnis, kepemimpinan, dan manajemen organisasi.",
    careerProspects: ["Business Analyst", "Project Manager", "Entrepreneur", "Consultant"],
    averageSalary: "Rp 7-20 juta/bulan",
    jobGrowth: "12% (Sedang-Tinggi)",
    requiredSkills: ["Kepemimpinan", "Komunikasi", "Analitis", "Negosiasi"],
    universities: ["UI", "UGM", "ITB", "Prasetiya Mulya", "PPM"],
  },
  {
    id: "psychology",
    name: "Psikologi",
    description: "Mempelajari perilaku manusia dan proses mental untuk membantu orang lain.",
    careerProspects: ["Psikolog Klinis", "HR Specialist", "Konselor", "Peneliti Perilaku"],
    averageSalary: "Rp 5-15 juta/bulan",
    jobGrowth: "18% (Tinggi)",
    requiredSkills: ["Empati", "Komunikasi", "Observasi", "Analitis"],
    universities: ["UI", "UGM", "Unpad", "Unika Atma Jaya", "UIN Jakarta"],
  },
  {
    id: "civil-engineering",
    name: "Teknik Sipil",
    description: "Merancang dan membangun infrastruktur seperti jembatan, gedung, dan jalan.",
    careerProspects: ["Civil Engineer", "Project Manager", "Structural Engineer", "Urban Planner"],
    averageSalary: "Rp 6-18 juta/bulan",
    jobGrowth: "8% (Sedang)",
    requiredSkills: ["Matematika", "Visualisasi Spasial", "Problem Solving", "Manajemen Proyek"],
    universities: ["ITB", "UGM", "ITS", "UI", "Undip"],
  },
  {
    id: "graphic-design",
    name: "Desain Komunikasi Visual",
    description: "Menciptakan komunikasi visual melalui desain grafis, branding, dan media digital.",
    careerProspects: ["Graphic Designer", "UI/UX Designer", "Brand Designer", "Creative Director"],
    averageSalary: "Rp 4-12 juta/bulan",
    jobGrowth: "10% (Sedang)",
    requiredSkills: ["Kreativitas", "Estetika", "Software Design", "Komunikasi Visual"],
    universities: ["ITB", "ISI Yogya", "Binus", "Trisakti", "IKJ"],
  },
  {
    id: "accounting",
    name: "Akuntansi",
    description: "Mengelola dan menganalisis informasi keuangan untuk pengambilan keputusan bisnis.",
    careerProspects: ["Akuntan", "Financial Analyst", "Auditor", "Tax Consultant"],
    averageSalary: "Rp 5-15 juta/bulan",
    jobGrowth: "6% (Sedang)",
    requiredSkills: ["Detail-oriented", "Matematika", "Analitis", "Integritas"],
    universities: ["UI", "UGM", "Unpad", "Trisakti", "UPH"],
  },
  {
    id: "communication",
    name: "Ilmu Komunikasi",
    description: "Mempelajari komunikasi massa, public relations, dan media untuk berbagai industri.",
    careerProspects: ["Public Relations", "Journalist", "Content Creator", "Marketing Communications"],
    averageSalary: "Rp 4-12 juta/bulan",
    jobGrowth: "14% (Tinggi)",
    requiredSkills: ["Komunikasi", "Kreativitas", "Writing", "Public Speaking"],
    universities: ["UI", "UGM", "Unpad", "UPH", "Binus"],
  },
]

// Expert system rules for matching
const expertRules = {
  // Academic Interest Rules
  "Matematika dan Fisika": ["computer-science", "civil-engineering"],
  "Biologi dan Kimia": ["medicine"],
  "Bahasa dan Sastra": ["communication"],
  "Sejarah dan Geografi": ["psychology", "communication"],
  "Seni dan Musik": ["graphic-design"],

  // Talent Rules
  "Berpikir logis dan analitis": ["computer-science", "accounting", "civil-engineering"],
  "Kreativitas dan inovasi": ["graphic-design", "computer-science"],
  "Komunikasi dan interpersonal": ["psychology", "communication", "business-management"],
  "Kepemimpinan dan organisasi": ["business-management"],
  "Teknis dan praktis": ["civil-engineering", "computer-science"],

  // Career Aspiration Rules
  "Teknologi dan Engineering": ["computer-science", "civil-engineering"],
  "Kesehatan dan Kedokteran": ["medicine"],
  "Bisnis dan Ekonomi": ["business-management", "accounting"],
  "Pendidikan dan Sosial": ["psychology"],
  "Seni dan Media": ["graphic-design", "communication"],
}

export function analyzeUserProfile(answers: Record<number, string>): Major[] {
  const majorScores: Record<string, number> = {}

  // Initialize scores
  majorsDatabase.forEach((major) => {
    majorScores[major.id] = 0
  })

  // Apply expert rules
  Object.values(answers).forEach((answer) => {
    const matchingMajors = expertRules[answer as keyof typeof expertRules] || []
    matchingMajors.forEach((majorId) => {
      majorScores[majorId] = (majorScores[majorId] || 0) + 1
    })
  })

  // Convert to Major objects with match scores
  const recommendedMajors = majorsDatabase
    .map((major) => ({
      ...major,
      matchScore: Math.min(100, (majorScores[major.id] / Object.keys(answers).length) * 100),
    }))
    .filter((major) => major.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)

  return recommendedMajors.slice(0, 5) // Return top 5 recommendations
}
