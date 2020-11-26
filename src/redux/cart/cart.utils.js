export const addItemToCart = (cartItems, newItem) => {
    const existingItem = cartItems.find(item => newItem.id === item.id);
    if (existingItem) {
        return cartItems.map(cartItem => {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
        });
    }
    return [...cartItems, { ...newItem, quantity: 1 }];
};
