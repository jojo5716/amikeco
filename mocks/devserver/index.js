let state = {
    isLoggedIn: false,
};

const getState = () => {
    // console.log('getState: ');
    // console.log(state);
    return state;
};
const setState = (newState) => {
    state = {
        ...state,
        ...newState,
    };
    // console.log('setState: ');
    // console.log(state);
};
const stateModule = {
    getState,
    setState,
};


module.exports = (app) => {
    // Mocking ajax request

    // Returns the post data received by the server
    app.post('*', (request, response) => {
        // Wait for wait to let us see the loader
        setTimeout(() => {
            let fullBody = '';
            request.on('data', chunk => fullBody += chunk.toString());
            request.on('end', () => response.send(fullBody));
        }, 1000);
    });
};
