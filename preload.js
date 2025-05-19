const { contextBridge } = require('electron');
const userStorage = require('./userStorage');

contextBridge.exposeInMainWorld('users', {
    add: (username, password) => userStorage.addUser(username, password),
    validate: (username, password) => userStorage.validateUser(username, password)
});
