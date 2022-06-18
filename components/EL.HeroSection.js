import HeroStyle from "../styles/Home.module.scss"

import Anchor from "./COM.Anchor"
import Button from "./COM.Button"

const HeroSection = () => {
    return (
        <section className={[HeroStyle.Hero__Section, "Container"].join(" ")}>
            <div className={HeroStyle.Hero__Label}>
                <span className={HeroStyle.Hero__Label__Name}>AKBAR SANI</span>

                <span className={HeroStyle.Hero__Label__Separator}></span>

                <span className={HeroStyle.Hero__Label__Title}>
                    FRONTEND EHUSIAST
                </span>
            </div>

            <div className={HeroStyle.Hero__Title}>
                <h1
                    className={["Heading__2", HeroStyle.Hero__Title__Text].join(
                        " "
                    )}
                >
                    CREATIVE INDEPENDENT
                </h1>
                <h1
                    className={["Heading__2", HeroStyle.Hero__Title__Text].join(
                        " "
                    )}
                >
                    WEB FRONTEND DEVELOPER
                </h1>
            </div>

            <div className={HeroStyle.Hero__Btn}>
                <Button arrow cc={[HeroStyle.Btn__Cta, HeroStyle.Contact__Me]}>
                    CONTACT ME
                </Button>

                <Button
                    arrow
                    cc={[HeroStyle.Btn__Cta, HeroStyle.Contact__Project]}
                >
                    CHECKOUT PROJECT
                </Button>
            </div>

            <div className={HeroStyle.Hero__Social}>
                <Anchor link arrow={false} cc={[HeroStyle.Hero__Social__Link]}>
                    GITHUB
                </Anchor>

                <Anchor link arrow={false} cc={[HeroStyle.Hero__Social__Link]}>
                    INSTAGRAM
                </Anchor>

                <Anchor link arrow={false} cc={[HeroStyle.Hero__Social__Link]}>
                    MEDIUM
                </Anchor>

                <Anchor link arrow={false} cc={[HeroStyle.Hero__Social__Link]}>
                    BEHANCE
                </Anchor>
            </div>
        </section>
    )
}

export default HeroSection
