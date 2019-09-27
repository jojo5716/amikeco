module.exports = {
    getAvailabilityProps,
};

function mergeCallbackIntoRoom(room, commonCallbacks) {
    return { ...room, ...commonCallbacks };
}

function getAvailabilityProps(props, commonCallbacks) {
    const availabilityProps = props.availability;
    const loyaltyMessage = {
        ...availabilityProps.loyaltyMessage,
        onClickButton: props.showLoyalty,
    };

    return {
        ...availabilityProps,
        loyaltyMessage,
        roomData: availabilityProps.roomData.map(room => mergeCallbackIntoRoom(room, commonCallbacks)),
        onChangeCurrency: props.loadShoppingCart,
    };
}
