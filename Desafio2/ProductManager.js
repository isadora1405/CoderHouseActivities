const path = require('path')
const fs = require('fs').promises;


class ProductManager{
    
    constructor(){
        this.filePath = path.join(__dirname,'Product.json');
    }

    async getProducts() {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            if (error) {
                console.error(error);
            }
            return [];
        }
    }

    async saveProducts(products) {
        try {
            await fs.writeFile(this.filePath, JSON.stringify(products, null, 2));
        } catch (error) {
            console.error('Error writing products file:', error);
        }
    }

    async addProduct(productsToAdd){
        let products = await this.getProducts();
    
        for (const product of productsToAdd) {
            const { code } = product;
            const existingProduct = products.find(p => p.code === code);
            
            if (existingProduct) {
                console.log(`O código informado para o produto ${existingProduct.title} já existe. Por favor, informe outro código.`);
                continue;
            }
    
            const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
            const newId = maxId + 1;
            const newProduct = { id: newId, ...product };
    
            products.push(newProduct);
            console.log(`Produto ${newProduct.title} adicionado com sucesso.`);
        }
    
        await this.saveProducts(products);
        console.log('Todos os produtos foram cadastrados com sucesso.');
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

    async updateProduct(productId, updatedProduct) {
        let products = await this.getProducts();
        const productIndex = products.findIndex(product => product.id === productId);

        if (productIndex === -1) {
            console.log('Produto não encontrado');
            return;
        }

        const updatedProductWithId = { ...products[productIndex], ...updatedProduct, id: productId, code: products[productIndex].code };
        products[productIndex] = updatedProductWithId;

        await this.saveProducts(products);
        console.log('Produto atualizado com sucesso', products);
    }

    async deleteProductById(productId) {
        let products = await this.getProducts();
        const updatedProducts = products.filter(product => product.id !== productId);

        if (products.length === updatedProducts.length) {
            console.log('Produto não encontrado');
            return;
        }

        await this.saveProducts(updatedProducts);
        console.log('Produto removido com sucesso');
    }

}
module.exports = ProductManager;