const fs = require('fs').promises;


class ProductManager{
    
    constructor(){
        this.products = [
            { 
                id: 1,
                title: "Caneta",
                description: "Caneta azul",
                price: 149.99,
                thumbnail: "images/caneta.jpg",
                code: 86,
                stock: 4 
            },
            { 
                id: 2,
                title: "Lápis",
                description: "Lápis preto",
                price: 3,
                thumbnail: "images/lapis.jpg",
                code: 8,
                stock: 50 
            },
            { 
                id: 3,
                title: "Borracha",
                description: "Borracha",
                price: 3,
                thumbnail: "images/borracha.jpg",
                code: 8,
                stock: 50 
            }
        ];
    }

    async getProducts() {
        try {
            return this.products
        } catch (error) {
            if (error) {
                console.error(error);
            }
            return [];
        }
    }
    
    async getProductById(productId) {
        
        const products = await this.getProducts();
        const product = products.find(product => product.id === productId);

        if (!product) {
            console.log('Produto não encontrado');
            return null;
        } else {
            return product;
        }
    }
}
module.exports = ProductManager;