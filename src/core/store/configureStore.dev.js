import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies

import crashReporter from '@core/middlewares/logger';
import rootReducer from '@core/reducers';


const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware({ });
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(sagaMiddleware, createLogger(), crashReporter),
        ),
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
};

export default configureStore;
