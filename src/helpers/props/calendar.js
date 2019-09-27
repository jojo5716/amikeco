module.exports = {
    getCalendarProps,
};

function getCalendarProps(
    {
        translations,
        promotionalCode,
        formatDates,
        formatDatesForTabs,
        startDate,
        showPromotionalCodeInput,
        acceptsDatesBeforeToday,
        oneDayOnly,
        destinationSelected,
        closeCalendar,
        callbackSubmitForm,
    },
) {
    return {
        ...translations,
        promotionalCode,
        formatDates,
        formatDatesForTabs,
        startDate,
        showPromotionalCodeInput,
        acceptsDatesBeforeToday,
        oneDayOnly,
        destinationSelected,
        callbackSubmitForm,
        callBackButton,
        closeCalendar,
    };
}

function callBackButton() {
    console.log('callBackButton');
}
