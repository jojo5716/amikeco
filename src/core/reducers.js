import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as appReducers from '@core/app/reducer';


export default combineReducers({
    routerReducer,
    appReducers: appReducers.reducer,
});
