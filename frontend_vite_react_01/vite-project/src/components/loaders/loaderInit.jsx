import './loaderInit.css';
const LoaderInit = () => {
    return (
        <div className="spinnerContainer">
            <div className="spinner"></div>
            <div className="loader2">
                <p>loading</p>
                <div className="words">
                <span className="word">user</span>
                <span className="word">settings</span>
                <span className="word">services</span>
                <span className="word">user</span>
                <span className="word">settings</span>
                </div>
            </div>
        </div>
    )
}
export default LoaderInit

