document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert('Email and password are required.');
        return;
    }

    const userData = JSON.parse(localStorage.getItem(email));

    if (!userData || userData.password !== password) {
        alert('Invalid email or password.');
        return;
    }

    alert('Login successful!');
    window.location.href = 'homepage.html'; 
});