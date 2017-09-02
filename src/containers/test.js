/**
 * Created by mupxq on 8/24/17.
 */
import React from 'react'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as IndexTest from '../actions/indexText'

class Test extends React.Component{

    handleOnClick(){
        let action = this.props.indexTestAction;
        action.testUpdate({
            test: 'test2'
        })
    }


    render(){
        return (
            <div>
                <button onClick={() => this.handleOnClick()}>test2</button>
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
        indexTestAction: bindActionCreators(IndexTest,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)