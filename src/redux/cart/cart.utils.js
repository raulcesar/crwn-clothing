export const addItemToCart = (cartItems, newItem) => {
    const existingItem = cartItems.find(item => newItem.id === item.id);
    if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
        return cartItems.map(cartItem => {
            return { ...cartItem, quantity: cartItem.quantity };
        });
    }
    return [...cartItems, { ...newItem, quantity: 1 }];
};
