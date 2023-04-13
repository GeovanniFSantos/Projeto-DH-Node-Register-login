const loginModels = require('../models/login')
const { validationResult } = require('express-validator');

function login (req, res){
    return res.render('loginForm')
};

function processo (req, res){
    const resultValidations = validationResult(req); // requerindo as validaçoes no resultado de validaçoes.
    // Se o resultado da validações for vazio , enviamos o errors para o formulario 
    if (resultValidations.errors.length > 0) {
     return res.render('loginForm', {
         errors: resultValidations.mapped(),
         oldData: req.body  // mandando para views todoas as propriedade de errors
     });
    };
    return res.send('Ok, as validaçoes Passaram', 'registerForm');
 };




module.exports = { 
    login,
    processo
}