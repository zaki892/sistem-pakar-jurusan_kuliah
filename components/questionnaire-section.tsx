"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"

interface Question {
  id: number
  category: string
  question: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    category: "Minat Akademik",
    question: "Mata pelajaran mana yang paling Anda sukai di sekolah?",
    options: [
      "Matematika dan Fisika",
      "Biologi dan Kimia",
      "Bahasa dan Sastra",
      "Sejarah dan Geografi",
      "Seni dan Musik",
    ],
  },
  {
    id: 2,
    category: "Minat Akademik",
    question: "Aktivitas belajar mana yang paling Anda nikmati?",
    options: [
      "Memecahkan masalah matematika",
      "Melakukan eksperimen laboratorium",
      "Menulis dan membaca",
      "Diskusi dan presentasi",
      "Proyek kreatif",
    ],
  },
  {
    id: 3,
    category: "Bakat dan Kemampuan",
    question: "Kemampuan mana yang paling menonjol pada diri Anda?",
    options: [
      "Berpikir logis dan analitis",
      "Kreativitas dan inovasi",
      "Komunikasi dan interpersonal",
      "Kepemimpinan dan organisasi",
      "Teknis dan praktis",
    ],
  },
  {
    id: 4,
    category: "Bakat dan Kemampuan",
    question: "Dalam kerja kelompok, peran apa yang biasanya Anda ambil?",
    options: ["Pemimpin tim", "Pemecah masalah", "Koordinator", "Kreatif ideator", "Pelaksana teknis"],
  },
  {
    id: 5,
    category: "Kepribadian",
    question: "Lingkungan kerja seperti apa yang Anda sukai?",
    options: [
      "Kantor dengan teknologi modern",
      "Laboratorium atau ruang riset",
      "Studio kreatif",
      "Lapangan atau outdoor",
      "Ruang meeting dan presentasi",
    ],
  },
  {
    id: 6,
    category: "Kepribadian",
    question: "Bagaimana cara Anda mengatasi masalah?",
    options: [
      "Analisis data dan fakta",
      "Brainstorming kreatif",
      "Diskusi dengan orang lain",
      "Trial and error",
      "Mengikuti prosedur yang ada",
    ],
  },
  {
    id: 7,
    category: "Aspirasi Karir",
    question: "Bidang pekerjaan mana yang paling menarik bagi Anda?",
    options: [
      "Teknologi dan Engineering",
      "Kesehatan dan Kedokteran",
      "Bisnis dan Ekonomi",
      "Pendidikan dan Sosial",
      "Seni dan Media",
    ],
  },
  {
    id: 8,
    category: "Aspirasi Karir",
    question: "Apa yang paling penting dalam karir impian Anda?",
    options: ["Gaji yang tinggi", "Kepuasan personal", "Dampak sosial", "Stabilitas kerja", "Fleksibilitas waktu"],
  },
]

export function QuestionnaireSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleStartOver = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setIsCompleted(false)
  }

  if (isCompleted) {
    return (
      <section id="questionnaire" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Kuesioner Selesai!</h2>
            <p className="text-muted-foreground mb-8">
              Terima kasih telah menyelesaikan kuesioner. Sistem sedang menganalisis jawaban Anda untuk memberikan
              rekomendasi jurusan yang tepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
              >
                Lihat Hasil Analisis
              </Button>
              <Button variant="outline" size="lg" onClick={handleStartOver}>
                Mulai Ulang
              </Button>
            </div>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="questionnaire" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kuesioner Minat & Bakat</h2>
          <p className="text-xl text-muted-foreground">
            Jawab pertanyaan berikut dengan jujur untuk mendapatkan rekomendasi yang akurat
          </p>
        </div>

        <Card className="p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-muted-foreground">
                Pertanyaan {currentQuestion + 1} dari {questions.length}
              </span>
              <span className="text-sm font-medium text-primary">{Math.round(progress)}% Selesai</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="mb-8">
            <div className="text-sm font-medium text-primary mb-2">{questions[currentQuestion].category}</div>
            <h3 className="text-2xl font-semibold mb-6 text-balance">{questions[currentQuestion].question}</h3>

            <RadioGroup
              value={answers[questions[currentQuestion].id] || ""}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              Sebelumnya
            </Button>

            <Button
              onClick={handleNext}
              disabled={!answers[questions[currentQuestion].id]}
              className="flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? "Selesai" : "Selanjutnya"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
