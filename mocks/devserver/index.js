const { name  } = require('../../package.json');

// Ajax urls
const URL_AJAX_APP_SETTINGS = `/ajax/${name}/settings`;
const URL_APP_TRANSLATIONS = `/ajax/${name}/translations`;
const URL_APP_HEADER_PROPS = `/ajax/${name}/header/props`;
const URL_APP_FOOTER_PROPS = `/ajax/${name}/footer/props`;


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
    app.post(URL_AJAX_APP_SETTINGS, (request, response) => {
        response.json({
            user: {},
        });
    });

    app.post(URL_APP_TRANSLATIONS, (request, response) => {
        response.json({
            logout: 'Logout',
            yes: 'Si',
        });
    });
    app.post(URL_APP_HEADER_PROPS, (request, response) => {
        response.json({
            logo: '',
        });
    });
    app.post(URL_APP_FOOTER_PROPS, (request, response) => {
        response.json({
            content: 'By jojo',
        });
    });

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
