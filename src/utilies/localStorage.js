const getStoredCart = () =>{
    const storedCart= localStorage.getItem('cart');
    if(storedCart){
        return JSON.parse(storedCart);
    }
    return [];
}
const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)

}

const addToCart = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLocalStorage(cart)

}
const removeFromLs =(id) =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx.id !== id);
    saveCartToLocalStorage(remaining)
}

export {addToCart, getStoredCart, removeFromLs}
