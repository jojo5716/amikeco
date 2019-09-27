import React from 'react';
import { Link } from 'react-router-dom';

import { URL_HOME } from '@src/constants/urls';


const Page404 = ({ location }) => (
    <div>
        <h2>
            No match found for
            <code>{location.pathname}</code>
            <Link to={URL_HOME}>Go to availability</Link>
        </h2>
    </div>
);


export default Page404;
