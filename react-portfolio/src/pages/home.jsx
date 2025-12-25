import { AboutSection } from "../components/about"
import { ContactSection } from "../components/contact"
import { HeroSection } from "../components/hero"
import { NavBar } from "../components/navbar"
import { ProjectSection } from "../components/project"
import { SKillsSection } from "../components/skills"
import { StarBack } from "../components/starbackground"
import { ThemeToggle } from "../components/theme"


export const HomePage = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            {/* theme toggle */}
            <ThemeToggle />

            {/* background effect */}
            <StarBack />

            {/* navbar */}
            <NavBar />

            {/* main content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SKillsSection />
                <ProjectSection />
                <ContactSection />
            </main>

            {/* footer */}
        </div>
    )
}