import { GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Sistem Pakar Jurusan Kuliah</h3>
                <p className="text-sm text-muted-foreground">Expert System</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Platform terpercaya untuk membantu siswa menemukan jurusan kuliah yang sesuai dengan minat, bakat, dan
              potensi mereka.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#questionnaire" className="hover:text-primary transition-colors">
                  Kuesioner
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-primary transition-colors">
                  Hasil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Tentang
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@sistempakar.edu</li>
              <li>Telepon: (021) 123-4567</li>
              <li>WhatsApp: +62 812-3456-7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Sistem Pakar Jurusan Kuliah. Dibuat dengan ❤️ menggunakan v0.dev</p>
        </div>
      </div>
    </footer>
  )
}
