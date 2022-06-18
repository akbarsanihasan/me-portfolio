import JournalStyle from "../../styles/Home.module.scss"

import LayoutWrapper from "../../components/LayoutWrapper"

export default function Journals() {
    return (
        <LayoutWrapper>
            <main className={JournalStyle.Journal} data-scroll-section>
                Journal
            </main>
        </LayoutWrapper>
    )
}
