import HomeStyle from "../styles/Home.module.scss"

import LayoutWrapper from "../components/LayoutWrapper"
import HeroSection from "../components/EL.HeroSection"

export default function Home() {
    return (
        <LayoutWrapper>
            <main className={HomeStyle.Home}>
                <HeroSection />
            </main>
        </LayoutWrapper>
    )
}
