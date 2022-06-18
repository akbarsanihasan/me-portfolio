import { useEffect, useRef, createContext } from "react"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { useRouter } from "next/router"

import VarStyle from "../styles/utils/Vars.module.scss"

import Header from "./CORE.Header"
import Footer from "./CORE.Footer"

const LayoutWrapper = ({ children }) => {
    const scrollContainer = useRef(null)

    return (
        <div
            data-scroll-section
            className={VarStyle.Layout__Wrapper}
            ref={scrollContainer}
        >
            <Header />

            {children}

            <Footer />
        </div>
    )
}

export default LayoutWrapper
