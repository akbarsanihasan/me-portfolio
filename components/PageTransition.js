import VarStyle from "../styles/utils/Vars.module.scss"

import { TransitionGroup, CSSTransition } from "react-transition-group"

const PageTranstion = ({ children, route }) => {
    return (
        <TransitionGroup component={null}>
            <CSSTransition
                onEntered={() => {
                    console.log("hello")
                }}
                key={route}
                timeout={1000}
                classNames="Layout"
            >
                {children}
            </CSSTransition>
        </TransitionGroup>
    )
}

export default PageTranstion
