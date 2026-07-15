const express = require('express')
const ProductManager = require('./ProductManager')

const port = 8080;
const productManager = new ProductManager();

const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/products', async(req, res) => {
    try {
        const products = await productManager.getProducts();
        const limit = parseInt(req.query.limit, 10);
        if (!isNaN(limit) && limit > 0) {
            res.json(products.slice(0, limit));
        } else {
            res.json(products);
        }
    } catch (error) {
        console.error('Erro ao obter produtos:', error);
    }
});

app.get('/products/:pid', async(req, res) => {
    try {
        const productId = parseInt(req.params.pid, 10);
        if (isNaN(productId)) {
            res.status(400).send('ID de produto inválido');
            return;
        }

        const product = await productManager.getProductById(productId);
        
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (error) {
        console.error('Erro ao obter produto:', error);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});