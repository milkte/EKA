
import React from 'react'
import {connect} from 'react-redux';
import * as userAction from '../actions/userActions';
import {bindActionCreators} from 'redux';
import {put} from '../fetch/fetch';
import {
    Redirect,
} from 'react-router-dom'
class Form1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            streetLine1: this.props.userName || "",
            streetLine2: this.props.password || "",
            city: this.props.email || "",
            state: this.props.state || "",
            zip: this.props.zip || "",
            redirect: false

        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        let userAction = this.props.userAction;
        userAction.editForm3(this.state);
        put('/updateProfile/' + this.props.match.params.id, this.state). then(res => {
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
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h1>Form 3</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>streetLine1
                        <br/>
                        <input type="text" name="streetLine1"  onChange={this.handleChange.bind(this)} value={this.state.userName}/>
                    </label>
                    <br/>
                    <label>streetLine2
                        <br/>
                        <input type="text" name="streetLine2"  onChange={this.handleChange.bind(this)} value={this.state.password}/>
                    </label>
                    <br/>
                    <label>city
                        <br/>
                        <input type="text" name="city"  onChange={this.handleChange.bind(this)} value={this.state.email}/>
                    </label>
                    <br/>
                    <label>state
                        <br/>
                        <input type="text" name="state"  onChange={this.handleChange.bind(this)} value={this.state.userName}/>
                    </label>
                    <br/>
                    <label>zip
                        <br/>
                        <input type="text" name="zip"  onChange={this.handleChange.bind(this)} value={this.state.userName}/>
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
