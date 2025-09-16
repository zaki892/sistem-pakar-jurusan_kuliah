"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Sistem Pakar</h1>
              <p className="text-sm text-muted-foreground">Jurusan Kuliah</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Beranda
            </a>
            <a href="#questionnaire" className="text-foreground hover:text-primary transition-colors">
              Kuesioner
            </a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors">
              Hasil
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Tentang
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Beranda
              </a>
              <a href="#questionnaire" className="text-foreground hover:text-primary transition-colors">
                Kuesioner
              </a>
              <a href="#results" className="text-foreground hover:text-primary transition-colors">
                Hasil
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                Tentang
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
