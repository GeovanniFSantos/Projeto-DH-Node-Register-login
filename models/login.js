const {validationResult} = require('express-validator')

function validationlogin (loginForm) {
    const errors = validationResult(loginForm);
    
};

module.exports = {
    validationlogin
}