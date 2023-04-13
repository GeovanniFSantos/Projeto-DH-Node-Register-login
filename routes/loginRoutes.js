const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const validacoesMiddleware = require('../middlewares/validacoesMiddleware');


router.get('/', loginController.login);
router.post('/', validacoesMiddleware.loginValidacoes ,loginController.processo);

module.exports = router;