const express = require('express')
const router = express.Router();
const multer = require('multer');
const adminController = require('../controllers/adminController')
const auth = require('../middlewares/authMiddleware');

const multerDiskerStorage = multer.diskStorage({
    destination: (req, file, calback) => {
        calback(null, 'public/image/produto');
    },
    fileName: (req, file, calback) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        calback(null, fileName);
    },
});

const upload = multer({
    storage: multerDiskerStorage
})

router.get('/criar', auth, adminController.admin);
router.post('/criar', upload.single('imgProduto'), adminController.criarProduto)


module.exports = router;