import ProjectStyle from "../styles/Home.module.scss"

const ProjectSection = () => {
    return (
        <section
            className={[ProjectStyle.Project__Section, "Container"].join(" ")}
        >
            <div className={ProjectStyle.Project__Section__Header}>
                <div className={ProjectStyle.Project__Title}>
                    <h2 className={ProjectStyle.Project__Title__Text}>
                        MY SELECTED PROJECT
                    </h2>

                    <p className={ProjectStyle.Project__Title__Sub__Text}>
                        I MAKE INTERACTIVE WEBSITE TO MAKE YOUR WEB EXPERIENCE
                        MEMORABLE
                    </p>

                    <p className={ProjectStyle.Project__Title__Sub__Text}>
                        WITH MY SKILLS I WILL TRANSFORM YOUR IDEA AND MAKE IT
                        COME TRUE
                    </p>
                </div>

                <blockquote
                    className={[ProjectStyle.Project__Section__SubTitle].join(
                        " "
                    )}
                >
                    " I create this with my own two hands, it's covered in my
                    blood sweat, tears and other fluids " - Mabel pines
                </blockquote>
            </div>

            <div className={ProjectStyle.Project__Showcase}></div>
        </section>
    )
}

export default ProjectSection
