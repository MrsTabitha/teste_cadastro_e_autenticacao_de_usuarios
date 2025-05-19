document.getElementById('registerBtn').addEventListener('click', () => {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    if (!username || !password) {
        alert("Preencha usuário e senha!");
        return;
    }

    const success = window.users.add(username, password);
    alert(success ? 'Usuário cadastrado com sucesso!' : 'Usuário já existe!');
});

document.getElementById('loginBtn').addEventListener('click', () => {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    if (!username || !password) {
        alert("Preencha usuário e senha!");
        return;
    }

    const isValid = window.users.validate(username, password);
    alert(isValid ? 'Login bem-sucedido!' : 'Credenciais inválidas!');
});
