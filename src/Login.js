import { Link } from 'react-router-dom';

function Login() {
    function getCredential(event) {
        if (event.key === "Enter") {
            event.target.value = "";
        }
    }

    function login(event) {
        const login = document.querySelector("#nav-login");
        login.textContent = "Logged In";
    }

    function openSignUpWindow(event) {
        window.open("/skill-lab/#/signup", "popup", "width=600, height=800");
    }

    return (
        <div className="login-page">
            <h1>Log in to your SkillLab account</h1>
            <div className="third-party-login">
                <a href="https://www.facebook.com" target="_"><img className="login-icon" src={require("./icons/facebook.png")} alt="facebook icon "/></a>
                <p className="social-login"><a href="https://www.facebook.com" target="_">Continue with Facebook</a></p>
            </div>
            <div className="third-party-login">
                <a href="https://myaccount.google.com" target="_"><img className="login-icon" src={require("./icons/google.png")} alt="google icon" /></a>
                <p className="social-login"><a href="https://myaccount.google.com" target="_">Continue with Google</a></p>
            </div>
            <input className="login-input" type="text" placeholder="Email" onKeyPress={getCredential}></input>  
            <input className="login-input" type="text" placeholder="Password" onKeyPress={getCredential}></input>
            <Link to="/home"><button id="login-btn" className="light-button" onClick={login}>Log In</button></Link>
            <Link className="forgot-password" to="/login">Forgot your password?</Link>
            <p className="no-account">Don't have an account? <button target="popup" onClick={openSignUpWindow}>Sign up</button></p>
        </div>
    );
}

export default Login;