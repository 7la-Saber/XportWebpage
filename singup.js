document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (!firstName || !lastName || !email || !password || !dob || !gender || !height || !weight) {
        alert('All fields are required.');
        return;
    }

    if (localStorage.getItem(email)) {
        alert('Account already exists.');
        return;
    }

    const userData = {
        firstName,
        lastName,
        email,
        password,
        dob,
        gender,
        height,
        weight
    };

    localStorage.setItem(email, JSON.stringify(userData));
    alert('Account created successfully!');
    window.location.href = 'homepage.html'; // Redirect to homepage
});

