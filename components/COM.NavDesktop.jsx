import { useIsomorphicLayoutEffect } from "react-use"
import { useRef } from "react"
import gsap from "gsap"

import NavStyle from "../styles/Header.module.scss"

import Anchor from "./COM.Anchor"

const NavDesktop = () => {
    const navTimeline = useRef(
        gsap.timeline({
            defaults: { duration: 1, ease: "power3.inOut" },
        })
    )

    const nav = useRef(null)

    useIsomorphicLayoutEffect(() => {
        const navElement = nav.current
        const navElementQuery = gsap.utils.selector(navElement)

        const navInfoElement = navElementQuery(`.${NavStyle.Nav__Info}`)
        const navLinks = navElementQuery(`.${NavStyle.Nav__Link}`)

        navTimeline.current
            .fromTo(navLinks, { y: "-100%" }, { y: "0%", stagger: 0.1 })
            .fromTo(
                navInfoElement,
                { opacity: 0, y: "-20px" },
                { opacity: 1, y: "0px", stagger: 0.1 },
                "-=0.5"
            )

        return () => {
            navTimeline.current.clear()
        }
    }, [])

    return (
        <nav className={NavStyle.Nav} ref={nav}>
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

export default NavDesktop
