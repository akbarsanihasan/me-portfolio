import "../styles/Globals.scss"

function MyApp({ Component, pageProps }) {
    return (
        <div className="App__Wrapper">
            <Component {...pageProps} data-scroll-section />
        </div>
    )
}

export default MyApp
