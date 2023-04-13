const {check} = require('express-validator');

const loginValidacoes = [ 
    check('email').notEmpty().withMessage('E-mail não pode estar em branco!'),
    check('email').isEmail().withMessage('Tem que ser um E-mail!'),
    check('email').custom(),
    check('psw').notEmpty().withMessage('Não pode estar vazio!'),
]

module.exports = {
    loginValidacoes
}