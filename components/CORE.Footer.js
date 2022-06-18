import FooterStyle from "../styles/Footer.module.scss"

import Anchor from "./COM.Anchor"
import Button from "./COM.Button"

const Footer = () => {
    return (
        <footer className={FooterStyle.Footer} data-scroll-section>
            <div className={FooterStyle.Footer__Head}>
                <div className={FooterStyle.Footer__Head__Label}>
                    <span className={FooterStyle.Footer__Head__Mark}>? /</span>
                    <span className={FooterStyle.Footer__Head__Text}>
                        HAVE INTERESTING PROJECT
                    </span>
                </div>

                <div className={FooterStyle.Footer__Head__Label}>
                    <span className={FooterStyle.Footer__Head__Mark}>? /</span>
                    <span className={FooterStyle.Footer__Head__Text}>
                        HAVE EMPTY POSITION IN YOUR COMPANY
                    </span>
                </div>
            </div>

            <div className={FooterStyle.Footer__Body}>
                <h1 className={FooterStyle.Footer__Body__Title}>
                    SEND ME A MESSAGE
                </h1>

                <div className={FooterStyle.Footer__Body__Cta}>
                    <Button
                        arrow
                        cc={[FooterStyle.Btn__Cta, FooterStyle.Contact__Me]}
                    >
                        +62895413526952
                    </Button>

                    <Button
                        arrow
                        cc={[
                            FooterStyle.Btn__Cta,
                            FooterStyle.Contact__Project,
                        ]}
                    >
                        akbar.sani.h@gmail.com
                    </Button>
                </div>
            </div>

            <div className={FooterStyle.Footer__Foot}>
                <div className={FooterStyle.Footer__Name__Label}>
                    <span className={FooterStyle.Footer__Name}>
                        Akbar Sani Hasan
                    </span>
                    <span className={FooterStyle.Footer__Status}>
                        Creative Developer
                    </span>
                </div>

                <div className={FooterStyle.Footer__Foot__Links}>
                    <Anchor
                        link
                        arrow={false}
                        cc={[FooterStyle.Footer__Social__Link]}
                    >
                        Github
                    </Anchor>

                    <Anchor
                        link
                        arrow={false}
                        cc={[FooterStyle.Footer__Social__Link]}
                    >
                        Instagram
                    </Anchor>

                    <Anchor
                        link
                        arrow={false}
                        cc={[FooterStyle.Footer__Social__Link]}
                    >
                        Medium
                    </Anchor>

                    <Anchor
                        link
                        arrow={false}
                        cc={[FooterStyle.Footer__Social__Link]}
                    >
                        Behance
                    </Anchor>
                </div>
            </div>
        </footer>
    )
}

export default Footer
