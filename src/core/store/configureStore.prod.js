import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import crashReporter from '@core/middlewares/logger';
import rootReducer from '@core/reducers';



const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware({ });
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, createLogger(), crashReporter),
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
};

export default configureStore;
