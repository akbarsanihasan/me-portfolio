import PlaygroundStyle from "../styles/Home.module.scss"

const Playground = () => {
    return (
        <section className={PlaygroundStyle.Playground__Section}>
            <div
                className={[
                    PlaygroundStyle.Playground__Story,
                    "Container",
                ].join(" ")}
            >
                <div className={PlaygroundStyle.Playground__Story__Title}>
                    <p className={PlaygroundStyle.Playground__Story__Text}>
                        {`WHAT DO I DO WHEN I'M NOT CODING ?`}
                    </p>
                    <p className={PlaygroundStyle.Playground__Story__Text}>
                        THE ANSWER IS{" "}
                        <span
                            className={
                                PlaygroundStyle.Playground__Story__Highlight
                            }
                        >
                            I DO MORE CODING
                        </span>{" "}
                        TO KEEP MY SKILL SHARP.
                    </p>
                    <p className={PlaygroundStyle.Playground__Story__Text}>
                        {`USUALLY I'M EXPLORING NEW TYPOGRAPHY, LAYOUT, ANIMATION
                        AND SOMETIMES I DO UI DESIGN, TRYING NEW LIBRARY, NEW
                        FRAMEWORK, NEW TECHNOLOGY.`}
                    </p>
                    <p className={PlaygroundStyle.Playground__Story__Text}>
                        {`AND SOMETIMES I'M TRYING NEW PROGRAMMING LANGUAGE OR A
                        WHOLE NEW DIFFERENT WORLD SUCH GAME DEVELOPMENT, OR
                        MOBILE APP DEVELOPMENT.`}
                    </p>
                    <p className={PlaygroundStyle.Playground__Story__Text}>
                        I CALLED THIS ACTIVITY{" "}
                        <span
                            className={
                                PlaygroundStyle.Playground__Story__Highlight
                            }
                        >
                            MY PLAYGROUND.
                        </span>
                    </p>
                </div>
            </div>

            <div className={PlaygroundStyle.Playground__Showcase}>
                <div
                    className={
                        PlaygroundStyle.Playground__Showcase__Item__Wrapper
                    }
                >
                    <div
                        className={PlaygroundStyle.Playground__Showcase__Item}
                    ></div>
                    <div
                        className={PlaygroundStyle.Playground__Showcase__Item}
                    ></div>
                    <div
                        className={PlaygroundStyle.Playground__Showcase__Item}
                    ></div>
                    <div
                        className={PlaygroundStyle.Playground__Showcase__Item}
                    ></div>
                    <div
                        className={PlaygroundStyle.Playground__Showcase__Item}
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default Playground
