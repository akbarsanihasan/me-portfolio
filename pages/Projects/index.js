import ProjectStyle from "../../styles/Home.module.scss"

import LayoutWrapper from "../../components/LayoutWrapper"

import Playground from "../../components/EL.Playground"

export default function Projects() {
    return (
        <LayoutWrapper>
            <main className={ProjectStyle.Project} data-scroll-section>
                Project
                <Playground />
            </main>
        </LayoutWrapper>
    )
}
