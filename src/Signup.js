import { Link } from 'react-router-dom';

function Signup() {
    function signup(event) {
        window.opener.location.replace("/skill-lab/#/home");
        event.preventDefault();
        /*
        const firstName = document.querySelector("#first-name").value;
        const lastName = document.querySelector("#last-name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        */
        window.close();
        const login = window.opener.document.querySelector("#nav-login");
        login.textContent = "Logged in";
        //window.opener.console.log(firstName, lastName, email, password);
    }

    return (
        <div className="signup-page">
            <form>
                <div className="signup-field first">
                    <label for="first-name">First Name</label><br />
                    <input type="text" id="first-name" placeholder="First Name"></input><br />
                </div>
                <div className="signup-field">
                    <label for="last-name">Last Name</label><br />
                    <input type="text" id="last-name" placeholder="Last Name"></input><br />
                </div>
                <div className="signup-field">
                    <label for="email">Email</label><br />
                    <input type="text" id="email" placeholder="Email"></input><br />
                </div>
                <div className="signup-field">
                    <label for="password">Email</label><br />
                    <input type="text" id="password" placeholder="Password"></input><br />
                </div>
                <button className="signup-btn" onClick={signup}><Link to="/home">Sign up</Link></button>
            </form>
        </div>
    );
}

export default Signup;