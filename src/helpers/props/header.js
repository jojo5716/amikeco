module.exports = {
    getHeaderProps,
};

function getHeaderProps(props) {
    const shouldRenderLoyalty = !(props.loyalty.error) && props.loyalty.isShown;
    const shoppingCartItems = props.shoppingCart || null;
    const headerProps = props.header;

    return {
        ...headerProps,
        loyalty: {
            ...headerProps.loyalty,
            needShowAuth: shouldRenderLoyalty,
            onCloseAuth: props.hideLoyalty,
            onClickLogout: (domain, callback) => props.logoutLoyalty(callback),
            onLoginCallback: props.deleteAndRelaunchAvailability,
        },
        shoppingcart: {
            ...headerProps.shoppingcart,
            items: getShoppingCartNumberOfItems(shoppingCartItems),
            onClick: props.loadShoppingCart,
        },
    };
}

function getShoppingCartNumberOfItems(shoppingCartItems) {
    const numOfPackages = getShoppingCartItemLength(shoppingCartItems, 'packages');
    const numOfRooms = getShoppingCartItemLength(shoppingCartItems, 'rooms');

    return shoppingCartItems ? numOfPackages + numOfRooms : 0;
}

function getShoppingCartItemLength(items, attributeName) {
    return (items && items[attributeName]) ? items[attributeName].length : 0;
}
