const fs = require('fs');
const path = require('path');

// Caminho absoluto para o arquivo users.json
const dataPath = path.join(__dirname, 'users.json');

// Lê os usuários do arquivo
function readUsers() {
    if (!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath, JSON.stringify([]));
    }

    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

// Salva os usuários no arquivo
function saveUsers(users) {
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}

// Adiciona um novo usuário
function addUser(username, password) {
    const users = readUsers();

    // Verifica se o usuário já existe
    const exists = users.some(user => user.username === username);
    if (exists) return false;

    // Adiciona o novo usuário
    users.push({ username, password });
    saveUsers(users);
    return true;
}

// Verifica se o usuário e senha estão corretos
function validateUser(username, password) {
    const users = readUsers();
    return users.some(user => user.username === username && user.password === password);
}

// Exporta as funções
module.exports = {
    addUser,
    validateUser
};
