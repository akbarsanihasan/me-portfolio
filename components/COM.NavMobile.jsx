import { useRef, useEffect } from "react"
import { useIsomorphicLayoutEffect } from "react-use"
import { gsap } from "gsap"

import NavStyle from "../styles/Header.module.scss"

import Anchor from "./COM.Anchor"

const NavMobile = ({ show }) => {
    const navMobileTimeline = useRef(
        gsap.timeline({
            paused: true,
            defaults: { duration: 1, ease: "power3.inOut" },
        })
    )

    const navMobile = useRef(null)

    useIsomorphicLayoutEffect(() => {
        const navMobileElement = navMobile.current
        const navMobileElementQuery = gsap.utils.selector(navMobileElement)

        const navInfoElement = navMobileElementQuery(`.${NavStyle.Nav__Info}`)
        const navLinks = navMobileElementQuery(`.${NavStyle.Nav__Link}`)
        const navMobileBtn = navMobileElement.parentElement.lastChild

        navMobileTimeline.current
            .fromTo(
                navMobileElement,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    onReverseComplete: () => {
                        navMobileBtn.style.pointerEvents = "all"
                    },
                }
            )
            .fromTo(
                navLinks,
                { y: "100%" },
                {
                    y: "0%",
                    stagger: 0.1,
                },
                "-=0.8"
            )
            .fromTo(
                navInfoElement,
                { opacity: 0, y: "-20px" },
                {
                    opacity: 1,
                    y: "0px",
                    stagger: 0.1,
                    onComplete: () => {
                        navMobileBtn.style.pointerEvents = "all"
                    },
                },
                "-=1"
            )

        return () => {
            navMobileTimeline.current.kill()
            navMobileTimeline.current.clear()
        }
    }, [])

    useEffect(() => {
        if (show) navMobileTimeline.current.play()
        if (!show) navMobileTimeline.current.reverse()
    }, [show])

    return (
        <nav className={NavStyle.Nav__Mobile} ref={navMobile}>
            <p className={[NavStyle.Nav__Info, NavStyle.Nav__Status].join(" ")}>
                CURRENTLY FREELANCE, AVAILABLE FOR INTERESTING PROJECT OR JOB
            </p>

            <p
                className={[NavStyle.Nav__Info, NavStyle.Nav__Location].join(
                    " "
                )}
            >
                BASED IN KLATEN, CENTRAL JAVA, INDONESIA
            </p>

            <ul className={NavStyle.Nav__Items}>
                <li className={NavStyle.Nav__Item}>
                    <Anchor href="/" arrow={false} cc={[NavStyle.Nav__Link]}>
                        HOME
                    </Anchor>
                </li>

                <li className={NavStyle.Nav__Item}>
                    <Anchor
                        href="/Projects"
                        arrow={false}
                        cc={[NavStyle.Nav__Link]}
                    >
                        PROJECTS
                    </Anchor>
                </li>

                <li className={NavStyle.Nav__Item}>
                    {" "}
                    <Anchor
                        href="/Journals"
                        arrow={false}
                        cc={[NavStyle.Nav__Link]}
                    >
                        JOURNALS
                    </Anchor>
                </li>
            </ul>
        </nav>
    )
}

export default NavMobile
