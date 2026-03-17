// quais ações meu carrinho pode fazer

// CASOS DE USO

// ✅ adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// ✅ Calcular o total
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
}

// ✅ deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index != -1) {
        userCart.splice(index, 1);
    }
}

// remover um item - diminui um item
async function removeItem(userCart, index) {

    // transforma o indice visual do usuario, para o indice do backend
    const deleteIndex = index - 1;
    
    // é maior do que zero e se é menor do que o tamanho do carrinho
    if (deleteIndex >= 0 && deleteIndex < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
    
}

async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal =  ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};