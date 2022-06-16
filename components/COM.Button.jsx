import ButtonStyle from "../styles/Button.module.scss"

const ArrowIconShort = () => {
    return (
        <svg
            className={ButtonStyle.ArrowIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
        </svg>
    )
}

const ArrowIconLong = () => {
    return (
        <svg
            className={ButtonStyle.ArrowIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
        </svg>
    )
}

const Button = (buttonProps) => {
    const { arrow, arrowLong, arrowRotation, cc, data, events } = buttonProps

    return (
        <button
            className={[...cc, ButtonStyle.Button].join(" ")}
            {...data}
            {...events}
        >
            <span className={ButtonStyle.Button__Wrapper}>
                {buttonProps.children}
                {arrow ? (
                    <ArrowIconShort arrowRotation={arrowRotation} />
                ) : arrowLong ? (
                    <ArrowIconLong arrowRotation={arrowRotation} />
                ) : (
                    ""
                )}
            </span>
        </button>
    )
}

export default Button

Button.defaultProps = {
    cc: [],
    data: {},
    events: {},
}
