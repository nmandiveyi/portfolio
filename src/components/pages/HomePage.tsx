import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { SectionDivider } from '@/components/shared/SectionHeader'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { InterestsSection } from '@/components/sections/InterestsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { WritingSection } from '@/components/sections/WritingSection'

export function HomePage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <WritingSection />
      <SectionDivider />
      <InterestsSection />
      <Footer />
    </div>
  )
}
