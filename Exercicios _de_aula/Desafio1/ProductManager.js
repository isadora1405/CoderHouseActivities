class ProductManager{
    
    constructor(){
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.log(`O código informado para o produto ${title} já existe. Por favor informe outro código`);
            return; 
        }
        const id = this.products.length+1;
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(product)
    }

    getProductById(productId){
       const product = this.products.find(product => product.id === productId)

       if (!product) {
        console.log('Não encontrado')
        return
       } else {
        return product
       }
    }

}
const productManager = new ProductManager();
productManager.addProduct('Borracha', 'Borracha branca', 5.00, 'images/borracha.jpg', 85, 7 )
productManager.addProduct('Caneta', 'Caneta azul', 6.00, 'images/caneta.jpg', 85, 4 )
productManager.addProduct('Lápis', 'Lápis preto', 3.00, 'images/lapis.jpg', 8, 50 )

console.log(productManager.products)
console.log(productManager.getProductById(1))
console.log(productManager.getProductById(5))