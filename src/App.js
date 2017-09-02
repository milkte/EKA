import React, {Component} from 'react';
 import Index from './containers/index';
import './App.css';
import {Provider} from 'react-redux'
import Form1 from './containers/Form1';
import Form2 from './containers/Form2';
import Form3 from './containers/Form3';
import configureStore from './store/configureStore'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
const store = configureStore();



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">

                    <BrowserRouter>
                        <div>
                        <Switch>
                            <Route exact={true} path='/' component={Index}/>
                            <Route exact={true} path='/formA' component={Form1}/>
                            <Route exact={true} path='/formB/:id' component={Form2}/>
                            <Route exact={true} path='/formC/:id' component={Form3}/>
                        </Switch>
                        </div>
                    </BrowserRouter>

                </div>
            </Provider>
        );
    }
}

export default App;
