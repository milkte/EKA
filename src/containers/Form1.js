/**
 * Created by mupxq on 8/25/17.
 */
import React from 'react'

export default class Form1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            storyData: []
        }
    }

    handleSubmit() {

    }

    componentDidMount() {


        let myFetchOptions = {
            method: 'Get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        fetch("http://192.168.1.164:5000/users", myFetchOptions).then(response => response.json())
            .then(json => {
                console.log(json);
                // let data = [];
                //
                // Promise.all(data).then(res => {
                //     this.setState({
                //         storyData: res
                //     })
                // })

            })


    }

    render() {


        return (
            <div>
                <h1>Form 1</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>User Name
                        <input type="text" name="userName"/>
                    </label>
                    <br/>
                    <label>Password
                        <input type="password" name="password"/>
                    </label>
                    <label>Email
                        <input type="email" name="email"/>
                    </label>
                </form>
            </div>
        )
    }

}