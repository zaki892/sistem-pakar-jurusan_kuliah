"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { TrendingUp, Users, BookOpen, Target } from "lucide-react"

// Sample data for visualizations
const majorDistributionData = [
  { name: "Teknik Informatika", value: 35, color: "#059669" },
  { name: "Kedokteran", value: 20, color: "#10b981" },
  { name: "Manajemen Bisnis", value: 18, color: "#4b5563" },
  { name: "Psikologi", value: 15, color: "#d97706" },
  { name: "Lainnya", value: 12, color: "#f1f5f9" },
]

const skillsRadarData = [
  { skill: "Logika", score: 90 },
  { skill: "Kreativitas", score: 70 },
  { skill: "Komunikasi", score: 65 },
  { skill: "Kepemimpinan", score: 55 },
  { skill: "Teknis", score: 85 },
  { skill: "Analitis", score: 88 },
]

const careerGrowthData = [
  { field: "Teknologi", growth: 22, salary: 25 },
  { field: "Kesehatan", growth: 15, salary: 50 },
  { field: "Bisnis", growth: 12, salary: 20 },
  { field: "Pendidikan", growth: 8, salary: 12 },
  { field: "Seni & Media", growth: 10, salary: 15 },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Tes</p>
              <p className="text-2xl font-bold">12,847</p>
            </div>
            <Users className="h-8 w-8 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">+12% dari bulan lalu</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Akurasi Sistem</p>
              <p className="text-2xl font-bold">94.2%</p>
            </div>
            <Target className="h-8 w-8 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Berdasarkan feedback pengguna</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Jurusan Tersedia</p>
              <p className="text-2xl font-bold">200+</p>
            </div>
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Dari 150+ universitas</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tingkat Kepuasan</p>
              <p className="text-2xl font-bold">4.8/5</p>
            </div>
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Dari 8,500+ review</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Major Distribution Pie Chart */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Distribusi Rekomendasi Jurusan</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={majorDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {majorDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {majorDistributionData.map((item, index) => (
              <Badge key={index} variant="outline" className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                {item.name}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Skills Radar Chart */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Profil Kemampuan Anda</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsRadarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Score" dataKey="score" stroke="#059669" fill="#059669" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Grafik radar menunjukkan kekuatan relatif Anda di berbagai area kemampuan berdasarkan jawaban kuesioner.
          </p>
        </Card>
      </div>

      {/* Career Growth Bar Chart */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">Prospek Karir per Bidang</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={careerGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="field" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="growth" fill="#059669" name="Pertumbuhan Pekerjaan (%)" />
              <Bar yAxisId="right" dataKey="salary" fill="#10b981" name="Rata-rata Gaji (Juta/bulan)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded"></div>
            <span className="text-sm">Pertumbuhan Pekerjaan (%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-secondary rounded"></div>
            <span className="text-sm">Rata-rata Gaji (Juta/bulan)</span>
          </div>
        </div>
      </Card>

      {/* Insights Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Insight Berdasarkan Profil Anda</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-muted-foreground">
                Anda memiliki kecenderungan kuat pada bidang teknologi dengan skor logika dan analitis yang tinggi.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-muted-foreground">
                Kemampuan problem-solving Anda sangat cocok untuk jurusan Teknik Informatika atau bidang engineering.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-muted-foreground">
                Prospek karir di bidang teknologi menunjukkan pertumbuhan yang sangat positif hingga 10 tahun ke depan.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Rekomendasi Langkah Selanjutnya</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <p className="text-muted-foreground">
                Pelajari lebih dalam tentang kurikulum Teknik Informatika di universitas pilihan.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <p className="text-muted-foreground">
                Mulai belajar bahasa pemrograman dasar seperti Python atau JavaScript.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <p className="text-muted-foreground">
                Ikuti kursus online atau bootcamp untuk memperkuat skill teknis Anda.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
