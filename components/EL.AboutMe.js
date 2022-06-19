import AboutMeStyle from "../styles/Home.module.scss"

import Anchor from "./COM.Anchor"

const AboutMe = () => {
    return (
        <section className={AboutMeStyle.About__Me}>
            <div className={AboutMeStyle.About__MeDetails}>
                <h1 className="Heading__3">{`LET'S KNOW MORE ABOUT M`}E</h1>

                <p className={AboutMeStyle.AboutMe__Description}>
                    My full name is Akbar Sani Hasan, i am a young creative
                    developer from Klaten, Central Java, Indonesia
                </p>

                <p className={AboutMeStyle.AboutMe__Description}>
                    {`My passion in web development brought me this far. i used to
                    see web technology is slowly dying but when i jump into it,
                    it's really deep and here i am now`}
                </p>

                <Anchor href="/Journals">Read Journals</Anchor>
            </div>

            <div className={AboutMeStyle.AboutMe__Profile__Picture}></div>
        </section>
    )
}

export default AboutMe
