import ProjectStyle from "../../styles/Home.module.scss"

import LayoutWrapper from "../../components/LayoutWrapper"
import { useEffect } from "react"

export default function Projects() {
    return (
        <LayoutWrapper>
            <main className={ProjectStyle.Project}>Project</main>
        </LayoutWrapper>
    )
}
