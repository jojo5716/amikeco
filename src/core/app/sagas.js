import {
    call, put, fork, all, take, takeEvery,
} from 'redux-saga/effects';

import appAPI from '@api/endpoints/app';


import {
    LOAD_INITIAL_CONFIG,
    LOAD_INITIAL_CONFIG_FAILED,
    LOAD_HEADER,
    LOAD_HEADER_FAILED,
    LOAD_FOOTER,
    LOAD_FOOTER_FAILED,
} from '@src/constants/actions';


export default function* root() {
    yield all([
        fork(loadInitialConfiguration),
        fork(loadHeader),
        fork(loadFooter),
    ]);
}

export function* loadInitialConfiguration() {
    try {
        const mobilisSettings = yield all([
            call(appAPI.settings),
            call(appAPI.translations),
        ]);

        yield put({
            type: LOAD_INITIAL_CONFIG,
            payload: { settings: mobilisSettings[0], translations: mobilisSettings[1] },
        });
    } catch (error) {
        yield put({
            type: LOAD_INITIAL_CONFIG_FAILED,
            payload: {
                settings_failed: true,
                settingsError: error.message,
            },
        });
    }
}

export function* loadHeader() {
    try {
        const mobilisHeader = yield call(appAPI.header);

        yield put({
            type: LOAD_HEADER,
            payload: { header: mobilisHeader },
        });
    } catch (error) {
        yield put({
            type: LOAD_HEADER_FAILED,
            payload: {
                header_failed: true,
                headerError: error.message,
            },
        });
    }
}

export function* loadFooter() {
    try {
        const mobilisFooter = yield call(appAPI.footer);

        yield put({
            type: LOAD_FOOTER,
            payload: { footer: mobilisFooter },
        });
    } catch (error) {
        yield put({
            type: LOAD_FOOTER_FAILED,
            payload: {
                footer_failed: true,
                footerError: error.message,
            },
        });
    }
}
