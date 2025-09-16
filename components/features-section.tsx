import { Card } from "@/components/ui/card"
import { Brain, Users, BookOpen, Award, Clock, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Menggunakan algoritma machine learning untuk analisis yang lebih akurat",
    },
    {
      icon: Users,
      title: "Konsultasi Expert",
      description: "Didukung oleh konselor pendidikan dan psikolog berpengalaman",
    },
    {
      icon: BookOpen,
      title: "Database Lengkap",
      description: "Informasi terkini tentang 200+ jurusan di universitas terbaik",
    },
    {
      icon: Award,
      title: "Sertifikat Hasil",
      description: "Dapatkan sertifikat hasil tes yang dapat digunakan untuk pendaftaran",
    },
    {
      icon: Clock,
      title: "Tes Cepat",
      description: "Selesaikan dalam 15-20 menit dengan hasil yang komprehensif",
    },
    {
      icon: Shield,
      title: "Data Aman",
      description: "Privasi dan keamanan data Anda adalah prioritas utama kami",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mengapa Memilih Sistem Pakar Kami?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Platform terdepan dengan teknologi AI dan dukungan expert untuk membantu Anda membuat keputusan pendidikan
            yang tepat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
