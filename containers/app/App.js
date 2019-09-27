import React, { Suspense } from 'react';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>App</h1>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default App;
