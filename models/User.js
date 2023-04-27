const {
    name
} = require('ejs');
const fs = require('fs');

const User = {
    fileName: './databases/users.json',


    create: function (userData) {
        let allUsers = this.getUsers();
        let newUser = {
            id: this.genarateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ''));
        return newUser;
    },

    genarateId: function () {
        let allUsers = this.getUsers();
        let lastUsers = allUsers.pop();

        if (lastUsers) {
            return lastUsers.id + 1;
        }
        return 1
    },

    getUsers: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findUserById: function (id) {
        let allUsers = this.getUsers();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findUserField: function (field, value) {
        let allUsers = this.getUsers();
        let userFound = allUsers.find(oneUser => oneUser[field] === value);
        return userFound;
    },

}

module.exports = User