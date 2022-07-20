import { Link } from 'react-router-dom';

function Signup(props) {
    const language = props.language;
    function signup(event) {
        window.opener.location.replace("/skill-lab/#/home");
        event.preventDefault();
        
        const firstName = document.querySelector("#first-name").value;
        const lastName = document.querySelector("#last-name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        window.close();
    }

    const firstName = (language === "English" || language === "Anglais")? "First Name" : "Prénom";
    const lastName = (language === "English" || language === "Anglais")? "Last Name" : "Nom de famille";
    const email = (language === "English" || language === "Anglais")? "Email" : "E-mail";
    const pwd = (language === "English" || language === "Anglais")? "Password" : "Mot de passe";
    const signupText = (language === "English" || language === "Anglais")? "Sign up" : "S'inscrire";

    return (
        <div className="signup-page">
            <form>
                <div className="signup-field first">
                    <label for="first-name">{firstName}</label><br />
                    <input type="text" id="first-name" placeholder={firstName}></input><br />
                </div>
                <div className="signup-field">
                    <label for="last-name">{lastName}</label><br />
                    <input type="text" id="last-name" placeholder={lastName}></input><br />
                </div>
                <div className="signup-field">
                    <label for="email">{email}</label><br />
                    <input type="text" id="email" placeholder={email}></input><br />
                </div>
                <div className="signup-field">
                    <label for="password">{pwd}</label><br />
                    <input type="text" id="password" placeholder={pwd}></input><br />
                </div>
                <button className="signup-btn" onClick={signup}><Link to="/home">{signupText}</Link></button>
            </form>
        </div>
    );
}

export default Signup;