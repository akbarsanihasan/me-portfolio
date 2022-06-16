import Header from "./CORE.Header"

const LayoutWrapper = ({ children }) => {
    return (
        <div className="Layout__Wrapper" data-scroll-container>
            <Header />

            {children}
        </div>
    )
}

export default LayoutWrapper
