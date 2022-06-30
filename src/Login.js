import { Link } from 'react-router-dom';

function Login() {
    function getCredential(event) {
        if (event.key === "Enter") {
            event.target.value = "";
        }
    }

    return (
        <div className="login-page">
            <h1>Log in to your SkillLab account</h1>
            <div className="third-party-login">
                <a href="https://www.facebook.com" target="_"><img className="login-icon" src={require("./icons/facebook.png")} /></a>
                <p className="social-login"><a href="https://www.facebook.com" target="_">Continue with Facebook</a></p>
            </div>
            <div className="third-party-login">
                <a href="https://myaccount.google.com" target="_"><img className="login-icon" src={require("./icons/google.png")} /></a>
                <p className="social-login"><a href="https://myaccount.google.com" target="_">Continue with Google</a></p>
            </div>
            <input className="login-input" type="text" placeholder="Email" onKeyPress={getCredential}></input>  
            <input className="login-input" type="text" placeholder="Password" onKeyPress={getCredential}></input>
            <Link to="/"><button id="login-btn" className="light-button">Log In</button></Link>
            <a className="forgot-password" href="#">Forgot your password?</a>
            <p className="no-account">Don't have an account? <a href="#">Sign up</a></p>
        </div>
    );
}

export default Login;