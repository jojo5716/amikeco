/**
 * Common methods to make AJAX calls
 */

const querystring = require('querystring');


module.exports = {
    /**
     * Makes a GET request to the API
     */
    get: function get(url) {
        const options = {
            credentials: 'include',
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        };

        return fetch(url, options).then(response => response.json());
    },

    /**
     * Makes a POST request to the API,
     * It also sends credential cookies and CSRF token (if found)
     */
    post: function post(url, body, applyQuerystring = true) {

        const bodyQuerystring = applyQuerystring ? querystring.stringify(body) : body;

        return fetch(url, {
            credentials: 'include',
            method: 'POST',
            headers: generateHeadersForPostRequest(),
            body: bodyQuerystring
        })
        .then(response => response.json());
    }
};


function generateHeadersForPostRequest() {
    return {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json'
    };
}
