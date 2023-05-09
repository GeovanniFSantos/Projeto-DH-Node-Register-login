const {
    validationResult
} = require('express-validator');
const User = require('../models/User')
const bcrypty = require('bcrypt');

function login(req, res) {
    return res.render('loginForm')
};



function loggingIn(req, res) {
    let userToLogin = User.findUserField('email', req.body.email);
    if (userToLogin) {
        let isPasswordVerified = bcrypty.compareSync(req.body.psw, userToLogin.psw)
        if (isPasswordVerified) {
            return res.render('admin')
        }

        req.session.usuario = userToLogin

        return res.render('loginForm', {
            errors: {
                email: {
                    msg: "A senha está inválida"
                }
            }
        });
    }

    return res.render('loginForm', {
        errors: {
            email: {
                msg: "Este email não foi encontrado"
            }
        }
    });
};




module.exports = {
    login,
    loggingIn,
}