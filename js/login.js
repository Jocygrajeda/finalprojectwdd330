const registrationForm = document.getElementById('registrationForm');
const registrationMessage = document.getElementById('registrationMessage');

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
            registrationMessage.textContent = 'Registration successful. You can now login.';
            document.getElementById('loginTab').click();
        } else {
            registrationMessage.textContent = 'Registration failed. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        registrationMessage.textContent = 'Error registering user. Please try again later.';
    });
});

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
            window.location.href = '/profile.html'; // Redirect to profile page on successful login
        } else {
            loginMessage.textContent = 'Login failed. Please check your credentials.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        loginMessage.textContent = 'Error logging in. Please try again later.';
    });
});

function openTab(event, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}
