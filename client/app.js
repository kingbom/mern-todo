import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render () {
        return <h1>Hello Mern Todo</h1>;
    }
}

ReactDom.render(<App />,
document.getElementById('app'));