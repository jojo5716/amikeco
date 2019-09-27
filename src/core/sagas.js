import { all } from 'redux-saga/effects';

import appSagas from '@core/app/sagas';


export default function* sagas() {
    yield all([
        appSagas(),
    ]);
}
