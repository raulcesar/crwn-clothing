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


export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(item => itemToRemove.id === item.id);
    if (!existingItem) {
        return cartItems;
    }

    if (existingItem.quantity <= 1) {
        return cartItems.filter(item => existingItem.id !== item.id);
    }

    return cartItems.map(item => {
        if (itemToRemove.id === item.id) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    });
};


