const crashReporter = store => next => (action) => { // eslint-disable-line no-unused-vars
    try {
        console.log(`Calling: ${action.type}`);
        return next(action);
    } catch (err) {
        console.error('Caught an exception!', err);
        // Send traceback to Sentry
        throw err;
    }
};

export default crashReporter;
