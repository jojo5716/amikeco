import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { ROOMS_AVAILABILITY_URL } from '@src/constants/urls';
import Routes from '@containers/routes';

import history from '@core/history';
import configureStore from '@core/store/configureStore';

import rootSaga from '@core/sagas';

const store = configureStore();
store.runSaga(rootSaga);


class SPAProvider extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Routes/>
                </Router>
            </Provider>
        );
    }
}

export default SPAProvider;


SPAProvider.propTypes = {
    availability: PropTypes.object,
    routes: PropTypes.object,
};

SPAProvider.defaultProps = {
    availability: {},
    routes: {},
};
