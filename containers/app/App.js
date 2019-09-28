import React from 'react';

import Sidebar from '@components/sidebar/';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Sidebar/>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default App;
