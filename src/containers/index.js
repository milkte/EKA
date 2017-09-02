/**
 * Created by mupxq on 8/24/17.
 */
import React from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as indexTestAction from '../actions/indexText'

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
            <div>
                Index
                <button onClick={() => this.handleOnClick()}>test111111111111</button>
                <TestButton2/>
            </div>
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