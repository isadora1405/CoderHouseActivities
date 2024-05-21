const ProductManager = require( './ProductManager')

const productManager = new ProductManager();

const novoProduto = [
    {
        title: 'Borracha',
        description: 'Borracha branca',
        price: 5.00,
        thumbnail: 'images/borracha.jpg',
        code: 85,
        stock: 7
    },
    {
        title: 'Caneta',
        description: 'Caneta azul',
        price: 6.00,
        thumbnail: 'images/caneta.jpg',
        code: 86,
        stock: 4
    },
    {
        title: 'Lápis',
        description: 'Lápis preto',
        price: 3.00,
        thumbnail: 'images/lapis.jpg',
        code: 8,
        stock: 50
    },
    {
        title: 'Apontador',
        description: 'Lápis preto',
        price: 3.00,
        thumbnail: 'images/Apontador.jpg',
        code: 8,
        stock: 50
    }
];

productManager.addProduct(novoProduto)
    .then(() => {
        console.log('Produto adicionado com sucesso');
        return productManager.getProductById(1);
    })
    .then((produto) => {
        console.log('Produto encontrado:', produto);
        const produtoAtualizado = { name: 'Novo Nome', price: 149.99 };
        return productManager.updateProduct(1, produtoAtualizado);
    })
    .then(() => {
        console.log('Produto atualizado com sucesso');
        return productManager.deleteProductById(1);
    })
    .then(() => {
        console.log('Produto deletado com sucesso');
    })
    .catch((error) => {
        console.log('Ocorreu um erro na operação do arquivo: ', error);
    });
