function Login() {
    function getCredential(event) {
        if (event.key === "Enter") {
            login();
        }
    }

    function login(event) {
        const inputEmail = document.querySelector(".login-input.email").value;
        const inputPassword = document.querySelector(".login-input.password").value;
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        if (inputEmail === savedEmail && inputPassword === savedPassword) {
            localStorage.setItem("loggedIn", true);
            window.location.replace("/skill-lab");
        } else {
            const emailError = document.querySelector("#email-error");
            const pwdError = document.querySelector("#pwd-error");

            if (inputEmail === "") {
                emailError.textContent = "Email cannot be blank";
                emailError.style.display = 'block';
            } else if (inputEmail !== savedEmail) {
                emailError.textContent = "There is no user with the email address you entered";
                emailError.style.display = 'block';
            }
            setTimeout(() => emailError.style.display = 'none', 3000);

            if (inputPassword === "") {
                pwdError.textContent = "Password cannot be blank";
                pwdError.style.display = 'block';
            } else if (inputPassword !== savedPassword) {
                pwdError.textContent = "You entered a wrong password";
                pwdError.style.display = 'block';
            }
            setTimeout(() => pwdError.style.display = 'none', 3000);
        }
    }

    function logout() {
        localStorage.setItem("loggedIn", false);
        window.location.replace("/skill-lab");
    }

    function openSignUpWindow(event) {
        window.open("/skill-lab/#/signup", "popup", "width=600, height=800");
    }

    if (localStorage.getItem("loggedIn") === 'true') {
        return (
            <div className="login-page">
                <h1>You are logged in as {localStorage.getItem("email")}</h1>
                <button className="dark-button" onClick={logout}>Log Out</button>
            </div>
        )
    } else {
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
                <p className="error" id="email-error">There is no account with this email</p>
                <input className="login-input email" type="text" placeholder="Email" onKeyPress={getCredential}></input>  
                <p className="error" id="pwd-error">You entered a wrong password</p>
                <input className="login-input password" type="text" placeholder="Password" onKeyPress={getCredential}></input>
                <button id="login-btn" className="light-button" onClick={login}>Log In</button>
                <p className="no-account">Don't have an account? <button target="popup" onClick={openSignUpWindow}>Sign up</button></p>
            </div>
        )
    }
}

export default Login;