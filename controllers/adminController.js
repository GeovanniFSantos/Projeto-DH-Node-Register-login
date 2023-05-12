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
    },
    viewsAttPT: (req, res) => {
        let {
            id
        } = req.params;
        let produtos = [{
                id: 1,
                nome: 'PlayStation 5 - Midia Fisica',
                preco: "3500"
            },
            {
                id: 2,
                nome: 'PlayStation 2 - Midia digital',
                preco: "1500"
            }
        ]
        res.render('admin', {
            produto: produtos[id]
        });
    },
    editar: (req, res) => {
        let {
            nomeProduto,
            descricaoProduto,
            imgProduto,
            precoProduto
        } = req.body;

        res.send('Você editou o produto' + nomeProduto)
    },
    listProduto: (req, res) => {
        let produtos = [{
                id: 0,
                nome: 'PlayStation 5 - Midia Fisica',
                preco: "3500"
            },
            {
                id: 1,
                nome: 'PlayStation 2 - Midia digital',
                preco: "1500"
            }
        ]
        res.render('adminProdutos', {
            listProduto: produtos
        })
    },
    deletarProduto: (req, res) => {
        let {
            id
        } = req.params;

        res.send("Estou deletando o Produto com o id: " + id)
    }
}


module.exports = adminController