const formContainer = document.getElementById("formContainer");

function loadSignUpForm() {
    formContainer.innerHTML = `
        <h1>Sign Up</h1>
        <div class="inputForm">
            <input type="text" class="input" id="Firstname" placeholder="Firstname">
        </div>
        <div class="inputForm">
            <input type="text" class="input" id="Lastname" placeholder="Lastname">
        </div>
        <div class="inputForm">
            <input type="email" class="input" id="email" placeholder="Email">
        </div>
        <div class="inputForm">
            <input type="password" class="input" id="password" placeholder="Password">
        </div>
        <div class="submitForm">
            <button type="submit" class="submit">Register</button>
        </div>
        <div class="LoginLink">
            <span>Have an account? <a id="login" href="#">Login</a></span>
        </div>
    `;

    document.getElementById("login").addEventListener("click", function (event) {
        event.preventDefault();
        loadLoginForm();
    });

    const registerButton = document.getElementsByClassName("submit")[0];
    registerButton.addEventListener("click", function () {
        const firstname = document.getElementById("Firstname").value;
        const lastname = document.getElementById("Lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("Firstname", firstname);
        localStorage.setItem("Lastname", lastname);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Login sie sich ein.");
        loadLoginForm();
    });
}

function loadLoginForm() {
    formContainer.innerHTML = `
        <h1>Login</h1>
        <div class="inputForm">
            <input type="email" class="input" id="loginEmail" placeholder="Email">
        </div>
        <div class="inputForm">
            <input type="password" class="input" id="loginPassword" placeholder="Password">
        </div>
        <div class="submitForm">
            <button type="submit" class="submit" id="login">Login</button>
        </div>
        <div class="checkboxArea">
            <input type="checkbox" class="checkbox">
            <a>Remember me</a>
        </div>
        <div class="LoginLink">
            <span>Don't have an account? <a id="signup" href="#">Sign Up</a></span>
        </div>
    `;

    document.getElementById("signup").addEventListener("click", function (event) {
        event.preventDefault();
        loadSignUpForm();
    });

    const loginButton = document.getElementById("login");
    loginButton.addEventListener("click", function () {
        const LoginEmail = document.getElementById("loginEmail").value;
        const LoginPassword = document.getElementById("loginPassword").value;
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (LoginEmail === storedEmail && LoginPassword === storedPassword) {
            element.href = './NewPage.html';
        } else {
            alert("Falsche Anmeldedaten");
        }
    });
}

loadSignUpForm();
