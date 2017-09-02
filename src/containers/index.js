/**
 * Created by mupxq on 8/24/17.
 */
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as indexTestAction from '../actions/indexText'
import Form1 from './Form1';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom'
import TestButton2 from './test'

class Index extends React.Component{

    // componentDidMount(){
    //     let action = this.props.indexTestAction;
    //     action.testUpdate({
    //         test: 'test1'
    //     })
    // }

        handleOnClick(){

                let action = this.props.indexTestAction;
                action.testUpdate({
                    test:'test1'
                })



    }

    render(){
        return (
         <BrowserRouter>
                <div>
                    <Link to="/form1">Fill in the form</Link>
                <Route exact={true} path='/form1' component={Form1}/>

                </div>

         </BrowserRouter>


        )
    }

}

function mapStateToProps(state) {
    return {
        indexTest: state.indexTest
    }
}

function mapDispatchToProps(dispatch) {
    return {
        indexTestAction: bindActionCreators(indexTestAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)