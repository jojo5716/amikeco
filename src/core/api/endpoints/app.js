/**
 * Ajax API.
 * Library to access the AJAX services exposed by server
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');

const api = require('../fetch');
const {
    URL_AJAX_APP_SETTINGS,
    URL_APP_TRANSLATIONS,
    URL_APP_HEADER_PROPS,
    URL_APP_FOOTER_PROPS,
} = require('@src/constants/urls');


/**
 * Global app services
 * @type {Object}
 */
module.exports = {

    /**
     * Gets the app initial data
     * @param {string} endpoint Optional endpoint (overrides the default)
     * @returns {object} A promise that resolves to the received data in json
     */
    settings: async (endpoint = URL_AJAX_APP_SETTINGS) => api.post(endpoint),
    translations: async (endpoint = URL_APP_TRANSLATIONS) => api.post(endpoint),
    header: async (endpoint = URL_APP_HEADER_PROPS) => api.post(endpoint),
    footer: async (endpoint = URL_APP_FOOTER_PROPS) => api.post(endpoint)
};
