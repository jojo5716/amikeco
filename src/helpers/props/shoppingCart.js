module.exports = {
    getShoppingCartProps,
};

function getShoppingCartProps(shoppingCartProps) {
    return {
        ...shoppingCartProps.shoppingCart,
        onRoomRemoved: shoppingCartProps.deleteRoomFromShoppingCart,
    };
}
