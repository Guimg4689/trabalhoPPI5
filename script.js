document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (email === '') {
            document.getElementById('emailError').textContent = 'O campo E-mail deve ser preenchido.';
            document.getElementById('emailError').style.display = 'block';
            event.preventDefault();
        } else {
            document.getElementById('emailError').textContent = '';
            document.getElementById('emailError').style.display = 'none';
        }

        if (password === '') {
            document.getElementById('passwordError').textContent = 'O campo Senha deve ser preenchido.';
            document.getElementById('passwordError').style.display = 'block';
            event.preventDefault();
        } else {
            document.getElementById('passwordError').textContent = '';
            document.getElementById('passwordError').style.display = 'none';
        }
    });
});
