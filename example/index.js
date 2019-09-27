/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
import React from 'react';
import ReactDOM from 'react-dom';
import SPAProvider from '../src/index';


import '../src/styles/index.less';



ReactDOM.render(
    <SPAProvider/>, document.getElementById('root'),
);
