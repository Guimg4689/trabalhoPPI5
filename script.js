document.getElementById('loginForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '') {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('emailError').textContent = 'O campo E-mail deve ser preenchido.';
        event.preventDefault();
    } else {
        document.getElementById('email').style.border = '1px solid #ccc';
        document.getElementById('emailError').textContent = '';
    }

    if (password === '') {
        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('passwordError').textContent = 'O campo Senha deve ser preenchido.';
        event.preventDefault();
    } else {
        document.getElementById('password').style.border = '1px solid #ccc';
        document.getElementById('passwordError').textContent = '';
    }
});
