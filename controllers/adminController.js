const adminController = {
    admin: (req, res) => {
        return res.render('admin')
    },
    criarProduto: (req, res) => {
        let {
            nomeProduto,
            descricaoProduto,
            imgProduto,
            precoProduto
        } = req.body;
        res.send('O Produto: ' + nomeProduto + " Foi criado com Sucesso!")
    }
}


module.exports = adminController