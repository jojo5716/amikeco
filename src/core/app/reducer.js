import {
    LOAD_INITIAL_CONFIG,
    LOAD_INITIAL_CONFIG_FAILED,
    LOAD_HEADER,
    LOAD_HEADER_FAILED,
    LOAD_FOOTER,
    LOAD_FOOTER_FAILED,
} from '@src/constants/actions';

import { mergeObject } from '@src/helpers/utils';

module.exports = {
    reducer,
};

const initialState = {
    settings: null,
    settings_failed: false,
    translations: null,
    header: null,
    header_failed: false,
    footer: null,
    footer_failed: false,
};

const reducerMap = [
    LOAD_INITIAL_CONFIG,
    LOAD_INITIAL_CONFIG_FAILED,
    LOAD_HEADER,
    LOAD_HEADER_FAILED,
    LOAD_FOOTER,
    LOAD_FOOTER_FAILED,
];

function reducer(state = initialState, action) {
    const isValidAction = reducerMap.indexOf(action.type) !== -1;

    return isValidAction ? mergeObject(state, action.payload) : state;
}
