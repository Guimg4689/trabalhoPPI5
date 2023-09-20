document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (email === '') {
            document.getElementById('email').classList.add('is-invalid');
            document.getElementById('emailError').textContent = 'O campo E-mail deve ser preenchido.';
            event.preventDefault();
        } else {
            document.getElementById('email').classList.remove('is-invalid');
            document.getElementById('emailError').textContent = '';
        }

        if (password === '') {
            document.getElementById('password').classList.add('is-invalid');
            document.getElementById('passwordError').textContent = 'O campo Senha deve ser preenchido.';
            event.preventDefault();
        } else {
            document.getElementById('password').classList.remove('is-invalid');
            document.getElementById('passwordError').textContent = '';
        }
    });
});
