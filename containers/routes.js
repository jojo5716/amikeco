import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MobilisApp from '@containers/app/ConnectedApp';
import Page404 from './404';

import { URL_HOME } from '@src/constants/urls';


const Routes = () => (
    <MobilisApp>
        <Switch>
            <Route component={Page404}/>
        </Switch>
    </MobilisApp>
);

export default Routes;
