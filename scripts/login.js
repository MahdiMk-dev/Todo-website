const button=document.getElementById("login-button")
button.addEventListener("click", function () {
    
validateLogin
})

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'AdminSEF123' && password === 'SeF@ctORy$$456') {
        alert('Login successful!');
        
        window.location.href = './pages/to-do.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}