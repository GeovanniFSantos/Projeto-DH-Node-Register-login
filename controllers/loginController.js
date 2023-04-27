const {
    validationResult
} = require('express-validator');
const User = require('../models/User')
const bcrypty = require('bcrypt');

function login(req, res) {
    return res.render('loginForm')
};

/*function processo(req, res) {
    const resultValidations = validationResult(req); // requerindo as validaçoes no resultado de validaçoes.
    // Se o resultado da validações for vazio , enviamos o errors para o formulario 
    if (resultValidations.errors.length > 0) {
        return res.render('loginForm', {
            errors: resultValidations.mapped(),
            oldData: req.body // mandando para views todoas as propriedade de errors
        });
    }
};*/

function loggingIn(req, res) {
    let userToLogin = User.findUserField('email', req.body.email);
    if (userToLogin) {
        let isPasswordVerified = bcrypty.compareSync(req.body.psw, userToLogin.psw)
        if (isPasswordVerified) {
            return res.send('Ok! vocé esta Logado!')
        }

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
    // processo,
    loggingIn,
}