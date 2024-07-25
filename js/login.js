const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/profile.html';
        } else {
            loginMessage.textContent = 'Login failed. Please check your credentials.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        loginMessage.textContent = 'Error logging in. Please try again later.';
    });
});
