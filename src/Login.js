import Navbar from './Navbar';

function Login(props) {
    const language = props.language;
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
                emailError.textContent = (language === "English" || language === "Anglais")? "Email cannot be blank" : "L'e-mail ne peut pas être vide";
                emailError.style.display = 'block';
            } else if (inputEmail !== savedEmail) {
                emailError.textContent = (language === "English" || language === "Anglais")? "There is no user with the email address you entered" : "Il n'y a pas d'utilisateur avec l'adresse e-mail que vous avez saisie";
                emailError.style.display = 'block';
            }
            setTimeout(() => emailError.style.display = 'none', 3000);

            if (inputPassword === "") {
                pwdError.textContent = (language === "English" || language === "Anglais")? "Password cannot be blank" : "Le mot de passe ne peut pas être vide";
                pwdError.style.display = 'block';
            } else if (inputPassword !== savedPassword) {
                pwdError.textContent = (language === "English" || language === "Anglais")? "You entered a wrong password" : "Vous avez entré un mauvais mot de passe";
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

    const loggedInAs = (language === "English" || language === "Anglais")? "You are logged in as" : "Vous êtes connecté en tant que";
    const logoutText = (language === "English" || language === "Anglais")? "Log Out" : "Se déconnecter";
    const header = (language === "English" || language === "Anglais")? "Log in to your SkillLab account" : "Connectez-vous à votre compte SkillLab";
    const facebook = (language === "English" || language === "Anglais")? "Log in with Facebook" : "Se connecter avec Facebook";
    const google = (language === "English" || language === "Anglais")? "Log in with Google" : "Connectez-vous avec Google";
    const email = (language === "English" || language === "Anglais")? "Emailr" : "E-mail";
    const pwd = (language === "English" || language === "Anglais")? "Password" : "Mot de passe";
    const loginText = (language === "English" || language === "Anglais")? "Log In" : "Connexion";
    const noAccount = (language === "English" || language === "Anglais")? "Don't have an account? " : "Vous n'avez pas de compte ? ";
    const signupText = (language === "English" || language === "Anglais")? "Sign up": "S'inscrire";

    if (localStorage.getItem("loggedIn") === 'true') {
        return (
            <div className="login-page">
                <h1>{loggedInAs} {localStorage.getItem("email")}</h1>
                <button className="dark-button" onClick={logout}>{logoutText}</button>
            </div>
        )
    } else {
        return (
            <div className="login-page">
                <Navbar language={language}/>
                <h1>{header}</h1>
                <div className="third-party-login">
                    <a href="https://www.facebook.com" target="_"><img className="login-icon" src={require("./icons/facebook.png")} alt="facebook icon "/></a>
                    <p className="social-login"><a href="https://www.facebook.com" target="_">{facebook}</a></p>
                </div>
                <div className="third-party-login">
                    <a href="https://myaccount.google.com" target="_"><img className="login-icon" src={require("./icons/google.png")} alt="google icon" /></a>
                    <p className="social-login"><a href="https://myaccount.google.com" target="_">{google}</a></p>
                </div>
                <p className="error" id="email-error">There is no account with this email</p>
                <input className="login-input email" type="text" placeholder={email} onKeyPress={getCredential}></input>  
                <p className="error" id="pwd-error">You entered a wrong password</p>
                <input className="login-input password" type="text" placeholder={pwd} onKeyPress={getCredential}></input>
                <button id="login-btn" className="light-button" onClick={login}>{loginText}</button>
                <p className="no-account">{noAccount}<button target="popup" onClick={openSignUpWindow}>{signupText}</button></p>
            </div>
        )
    }
}

export default Login;