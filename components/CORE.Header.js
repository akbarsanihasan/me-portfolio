import { useEffect, useState, useRef } from "react"
import { useIsomorphicLayoutEffect, useToggle } from "react-use"
import { gsap } from "gsap"

import HeaderStyle from "../styles/Header.module.scss"

import Anchor from "./COM.Anchor"
import NavMobile from "./COM.NavMobile"
import NavDesktop from "./COM.NavDesktop"

const Header = () => {
    const [deviceType, setDeviceType] = useState(0)
    const [showNavMobile, setShowNavMobile] = useToggle(false)

    const headerTimeline = useRef(
        gsap.timeline({ defaults: { duration: 0.8, ease: "power3.inOut" } })
    )
    const header = useRef(null)

    useEffect(() => {
        setDeviceType(innerWidth)

        window.onresize = (e) => {
            setDeviceType(e.target.innerWidth)
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        const headerElement = header.current
        const headerElementQuery = gsap.utils.selector(headerElement)

        const logoNameElement = headerElementQuery(`.${HeaderStyle.Logo__Name}`)
        const btnMenuElement = headerElementQuery(`.${HeaderStyle.Menu__Btn}`)

        headerTimeline.current.fromTo(
            logoNameElement,
            { y: "-20px", opacity: 0 },
            { y: "0px", opacity: 1 }
        )

        if (btnMenuElement.length > 0) {
            headerTimeline.current.fromTo(
                btnMenuElement,
                { y: "-20px", opacity: 0 },
                { y: "0px", opacity: 1 },
                "-=0.4"
            )
        }
    }, [])

    return (
        <header className={HeaderStyle.Header} ref={header}>
            <Anchor
                cc={[HeaderStyle.Logo__Name]}
                hover={false}
                arrow={false}
                href="/"
            >
                AKBAR SANI
            </Anchor>

            {deviceType === 0 ? null : deviceType < 768 ? (
                <NavMobile show={showNavMobile} />
            ) : (
                <NavDesktop />
            )}

            {deviceType < 768 ? (
                <span
                    className={HeaderStyle.Menu__Btn}
                    onClick={(e) => {
                        setShowNavMobile(!showNavMobile)
                        e.target.style.pointerEvents = "none"
                    }}
                >
                    MENU
                </span>
            ) : null}
        </header>
    )
}

export default Header
