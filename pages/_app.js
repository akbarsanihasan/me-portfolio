import PageTransition from "../components/PageTransition"
import { useRouter } from "next/router"
import { createContext, useEffect, useRef } from "react"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"

import "../styles/Globals.scss"
import VarStyle from "../styles/utils/Vars.module.scss"

export const LocomotiveScrollContext = createContext()

function MyApp({ Component, pageProps }) {
    const { asPath } = useRouter()
    const scrollContainer = useRef(null)

    return (
        <LocomotiveScrollProvider
            options={{ smooth: true }}
            containerRef={scrollContainer}
            watch={[asPath]}
            location={asPath}
        >
            <div
                className="App__Wrapper"
                data-scroll-container
                ref={scrollContainer}
            >
                <PageTransition route={asPath}>
                    <Component {...pageProps} />
                </PageTransition>

                <div className={[VarStyle.Loader, "Loader"].join(" ")}></div>
            </div>
        </LocomotiveScrollProvider>
    )
}

export default MyApp
