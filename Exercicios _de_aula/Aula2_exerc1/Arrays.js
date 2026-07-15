const objetos = [
    { 
        macas: 3,
        peras: 2,
        carne: 1,
        frango: 5,
        doces: 2
    },
    {
        macas: 1,
        cafes: 1,
        ovos: 6,
        frango: 1,
        paes: 4
    }
];
 
 // Array para armazenar os produtos
 const produtos = [];
 
 // Itera sobre cada objeto em 'objetos'
 objetos.forEach(objeto => {
     // Obtém todas as chaves do objeto atual
     const chaves = Object.keys(objeto);
     // Itera sobre cada chave
     chaves.forEach(chave => {
         // Verifica se o produto já está presente no array 'produtos'
         if (!produtos.includes(chave)) {
             // Adiciona o produto ao array 'produtos'
             produtos.push(chave);
         }
     });
 });
 
 console.log(produtos);