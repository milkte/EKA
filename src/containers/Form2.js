
import React from 'react'
import {connect} from 'react-redux';
import * as userAction from '../actions/userActions';
import {bindActionCreators} from 'redux';
import {put} from '../fetch/fetch';
import {
    Redirect
} from 'react-router-dom'
class Form1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            firstName: this.props.firstName || "",
            lastName: this.props.lastName || "",
            tel: this.props.tel || "",
            redirect: false,
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        let userAction = this.props.userAction;
        userAction.editForm2(this.state);
        put('/updateProfile/' + this.props.match.params.id, this.state). then(res => {
            userAction.postId(res.id);
            this.setState({
                id: res.id,
                redirect: true})
            });



    }

    handleChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]:value
        });

    }

    componentDidMount() {


    }

    render() {
        const {redirect} = this.state;
        if (redirect){
            return <Redirect to={'/formC/' + this.state.id}/>
        }

        return (
            <div>
                <h1>Form 2</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>First Name
                        <br/>
                        <input type="text" name="firstName"  onChange={this.handleChange.bind(this)} value={this.state.userName}/>
                    </label>
                    <br/>
                    <label>Last Name
                        <br/>
                        <input type="lastName" name="lastName"  onChange={this.handleChange.bind(this)} value={this.state.password}/>
                    </label>
                    <br/>
                    <label>Tel
                        <br/>
                        <input type="number" name="tel"  onChange={this.handleChange.bind(this)} value={this.state.email}/>
                    </label>
                    <br/>
                    <input type="submit" value="Save"/>
                </form>
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
        userAction : bindActionCreators(userAction, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form1)
