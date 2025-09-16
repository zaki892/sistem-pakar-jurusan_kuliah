import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GraduationCap, Target, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Temukan Jurusan Kuliah yang <span className="text-primary">Tepat</span> untuk Masa Depanmu
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Sistem pakar berbasis AI yang membantu menentukan jurusan kuliah berdasarkan minat, bakat, dan kepribadian
            Anda dengan akurasi tinggi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Mulai Tes Sekarang
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analisis Mendalam</h3>
              <p className="text-muted-foreground">Evaluasi komprehensif minat, bakat, dan kepribadian Anda</p>
            </Card>

            <Card className="p-6 text-center">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rekomendasi Akurat</h3>
              <p className="text-muted-foreground">Saran jurusan berdasarkan algoritma expert system terpercaya</p>
            </Card>

            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prospek Karir</h3>
              <p className="text-muted-foreground">Informasi lengkap tentang peluang karir dan gaji di masa depan</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
