function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    if (username && password) {
        const user = { username, password };
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("currentUser", username);
        document.getElementById("reg-msg").innerText = "Registered successfully!";
        setTimeout(() => window.location.href = "login.html", 1000);
    } else {
        document.getElementById("reg-msg").innerText = "Fill all fields!";
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && username === storedUser.username && password === storedUser.password) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("currentUser", username);
        window.location.href = "secure.html";
    } else {
        document.getElementById("login-msg").innerText = "Invalid credentials!";
    }
}