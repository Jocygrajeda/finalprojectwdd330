const registrationForm = document.getElementById('registrationForm');
const message = document.getElementById('message');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const email = formData.get('email');
    const password = formData.get('password');

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            message.textContent = 'Registration successful. You can now login.';
        } else {
            message.textContent = 'Registration failed. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        message.textContent = 'Error registering user. Please try again later.';
    });
});