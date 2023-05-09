const adminController = {
    admin: (req, res) => {
        return res.render('admin', {
            admin,
            usuario: req.session.usuario
        });
    }
}


module.exports = adminController;