/**
 * Created by mupxq on 8/24/17.
 */
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {get} from '../fetch/fetch';
import * as userAction from '../actions/userActions';
import {
    Link,
    Router,
    BrowserRouter,
} from 'react-router-dom'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        }
    }

    componentDidMount() {
        let userAction = this.props.userAction;
        userAction.init();
        // get("/allUsers").then(res => console.log(res));
    }

    handleOnClick() {


    }

    render() {
        return (
            <div>
                    <Link to='/formA'>Start</Link>
                <p>
                    More previous styling example can be checked at www.Naafii.com
                </p>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index)
