import React, {Component} from 'react';
 import Index from './containers/index';
import './App.css';
import HackNews from './containers/Form1'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Index/>
                   {/*<UserForm/>*/}
                </div>
            </Provider>
        );
    }
}

export default App;
