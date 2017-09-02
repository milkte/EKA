import React from 'react'
import {connect} from 'react-redux';
import * as userAction from '../actions/userActions';
import {bindActionCreators} from 'redux';
import {post} from '../fetch/fetch';
import {
    Redirect
} from 'react-router-dom'
class Form1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userName: this.props.userName || "",
            password: this.props.password || "",
            email: this.props.email || "",
            redirect: false,
            message: ""
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        //email validation
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(this.state.email)){
            //redux
            let userAction = this.props.userAction;
            userAction.addUser(this.state);
            //api call
            post('/createNewUser', this.state).then(res => {
                localStorage.removeItem('formA');
                userAction.postId(res.id);
                this.setState({
                    id: res.id,
                    redirect: true
                });

            });
        }else {
            this.setState({message: 'Invalid email'})
        }


    }


    saveForLaterHandler() {
        localStorage.setItem('formA', JSON.stringify(this.state));
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        //email validation

        this.setState({
            [name]: value
        });

    }

    componentDidMount() {
        //retrieve save for later
        let localString = localStorage.getItem('formA');
        if (localString) {
            this.setState(JSON.parse(localString));
        }
    }

    render() {
        const {redirect} = this.state;
        if (redirect) {
            return <Redirect to={'/formB/' + this.state.id}/>
        }

        return (
            <div>
                <h1>Form 1</h1>
                <p style={{color: 'red'}}>{this.state.message}</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>User Name
                        <br/>
                        <input type="text" name="userName" onChange={this.handleChange.bind(this)}
                               value={this.state.userName}/>
                    </label>
                    <br/>
                    <label>Password
                        <br/>
                        <input type="password" name="password" onChange={this.handleChange.bind(this)}
                               value={this.state.password}/>
                    </label>
                    <br/>
                    <label>Email
                        <br/>
                        <input type="email" name="email" onChange={this.handleChange.bind(this)}
                               value={this.state.email} />
                    </label>
                    <br/>
                    <input type="submit" value="Save"/>

                </form>
                <button onClick={this.saveForLaterHandler.bind(this)}>Save for later</button>

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
)(Form1)
