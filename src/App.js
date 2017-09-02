import React, {Component} from 'react';
// import Index from './containers/index'
import './App.css';
import HackNews from './containers/hackNew'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    HackNews
                   <HackNews/>
                </div>
            </Provider>
        );
    }
}

export default App;
