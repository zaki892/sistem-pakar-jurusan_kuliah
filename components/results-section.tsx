"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { analyzeUserProfile, type Major } from "@/lib/expert-system"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { useState, useEffect } from "react"
import { GraduationCap, TrendingUp, Users, MapPin, Star, Download, Share2, BarChart3 } from "lucide-react"

// Mock answers for demonstration - in real app this would come from questionnaire
const mockAnswers = {
  1: "Matematika dan Fisika",
  2: "Memecahkan masalah matematika",
  3: "Berpikir logis dan analitis",
  4: "Pemecah masalah",
  5: "Kantor dengan teknologi modern",
  6: "Analisis data dan fakta",
  7: "Teknologi dan Engineering",
  8: "Gaji yang tinggi",
}

export function ResultsSection() {
  const [recommendations, setRecommendations] = useState<Major[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate analysis delay
    const timer = setTimeout(() => {
      const results = analyzeUserProfile(mockAnswers)
      setRecommendations(results)
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <section id="results" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Menganalisis Profil Anda...</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sistem pakar sedang memproses jawaban Anda untuk memberikan rekomendasi terbaik
            </p>
            <div className="max-w-md mx-auto">
              <Progress value={75} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">Analisis hampir selesai...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="results" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hasil Analisis Sistem Pakar</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Berdasarkan analisis minat, bakat, dan kepribadian Anda, berikut adalah rekomendasi lengkap
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Unduh Laporan PDF
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Bagikan Hasil
            </Button>
          </div>
        </div>

        <Tabs defaultValue="recommendations" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recommendations" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Rekomendasi Jurusan
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analisis & Visualisasi
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="mt-8">
            <div className="grid gap-8">
              {recommendations.map((major, index) => (
                <Card key={major.id} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant={index === 0 ? "default" : "secondary"} className="text-sm">
                              #{index + 1} Rekomendasi {index === 0 ? "Terbaik" : ""}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium">{major.matchScore.toFixed(0)}% Match</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{major.name}</h3>
                          <p className="text-muted-foreground text-lg">{major.description}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium">Tingkat Kesesuaian</span>
                          <span className="text-sm text-muted-foreground">{major.matchScore.toFixed(0)}%</span>
                        </div>
                        <Progress value={major.matchScore} className="h-2" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Users className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold">Prospek Karir</h4>
                          </div>
                          <ul className="space-y-1">
                            {major.careerProspects.map((career, idx) => (
                              <li key={idx} className="text-muted-foreground">
                                • {career}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold">Info Karir</h4>
                          </div>
                          <div className="space-y-2 text-muted-foreground">
                            <p>
                              <span className="font-medium">Gaji:</span> {major.averageSalary}
                            </p>
                            <p>
                              <span className="font-medium">Pertumbuhan:</span> {major.jobGrowth}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Skill yang Dibutuhkan</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {major.requiredSkills.map((skill, idx) => (
                            <Badge key={idx} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Universitas Terbaik</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {major.universities.map((uni, idx) => (
                            <Badge key={idx} variant="secondary">
                              {uni}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-64">
                      <Card className="p-4 bg-primary/5 border-primary/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">{major.matchScore.toFixed(0)}%</div>
                          <div className="text-sm text-muted-foreground mb-4">Tingkat Kesesuaian</div>
                          <Button className="w-full" size="sm">
                            Pelajari Lebih Lanjut
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-8">
            <AnalyticsDashboard />
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-muted/30">
            <h3 className="text-2xl font-bold mb-4">Butuh Konsultasi Lebih Lanjut?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tim konselor pendidikan kami siap membantu Anda memahami hasil analisis dan merencanakan langkah
              selanjutnya untuk masa depan pendidikan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Jadwalkan Konsultasi</Button>
              <Button variant="outline" size="lg" className="bg-transparent">
                Hubungi Konselor
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
