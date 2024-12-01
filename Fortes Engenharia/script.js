
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'adm' && password === 'adm123') {
        window.location.href = 'admin.html';
    } else if (username === 'donatario01' && password === 'dona123') {
        window.location.href = 'donatario.html';
    } else {
        alert('Usuário ou senha inválidos!');
    }
});