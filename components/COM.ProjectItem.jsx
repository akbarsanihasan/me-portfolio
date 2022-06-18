import ProjectItemStyle from "../styles/Home.module.scss"

import Anchor from "./COM.Anchor"

const ProjectItem = () => {
    return (
        <div className={ProjectItemStyle.Project__Item}>
            <div className={ProjectItemStyle.Project__Item__Info}>
                <h3 className={ProjectItemStyle.Project__Title}>
                    CONCRETE ROAD CORP
                </h3>

                <p className={ProjectItemStyle.Project__Desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, harum.
                </p>

                <Anchor
                    href="/Projects"
                    cc={[ProjectItemStyle.Project__Item__Link]}
                >
                    VIEW DETAILS
                </Anchor>
            </div>

            <div className={ProjectItemStyle.Project__Item__Img__Wrapper}></div>
        </div>
    )
}

export default ProjectItem
