import { useEffect, useRef, createContext } from "react"
import { useRouter } from "next/router"

import VarStyle from "../styles/utils/Vars.module.scss"

import Header from "./CORE.Header"
import Footer from "./CORE.Footer"

const LayoutWrapper = ({ children }) => {
    return (
        <div className={VarStyle.Layout__Wrapper}>
            <Header />

            {children}

            <Footer />
        </div>
    )
}

export default LayoutWrapper
