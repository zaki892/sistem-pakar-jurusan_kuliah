import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { QuestionnaireSection } from "@/components/questionnaire-section"
import { ResultsSection } from "@/components/results-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <QuestionnaireSection />
        <ResultsSection />
      </main>
      <Footer />
    </div>
  )
}
