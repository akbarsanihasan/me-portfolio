import HomeStyle from "../styles/Home.module.scss"

import LayoutWrapper from "../components/LayoutWrapper"
import HeroSection from "../components/EL.HeroSection"
import ProjectSection from "../components/EL.ProjectSection"
import Playground from "../components/EL.Playground"
import AboutMe from "../components/EL.AboutMe"

export default function Home() {
    return (
        <LayoutWrapper>
            <main className={HomeStyle.Home} data-scroll-section>
                <HeroSection />

                <ProjectSection />

                <Playground />

                <AboutMe />
            </main>
        </LayoutWrapper>
    )
}
