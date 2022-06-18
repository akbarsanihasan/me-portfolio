import HomeStyle from "../styles/Home.module.scss"

import LayoutWrapper from "../components/LayoutWrapper"
import HeroSection from "../components/EL.HeroSection"
import ProjectSection from "../components/EL.ProjectSection"

export default function Home() {
    return (
        <LayoutWrapper>
            <main className={HomeStyle.Home}>
                <HeroSection />

                <ProjectSection />
            </main>
        </LayoutWrapper>
    )
}
