/**
 * Created by mupxq on 8/25/17.
 */
import React from 'react'

export default class HackNew extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            storyData: []
        }
    }

    componentDidMount(){



        let myFetchOptions = {
            method: 'Get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty", myFetchOptions).then(response => response.json())
            .then(json => {
                console.log(json);
                let data = [];

                json.forEach(storyId => {
                    let storyData = fetch("https://hacker-news.firebaseio.com/v0/item/" +storyId +".json?print=pretty", myFetchOptions).then(response => response.json())

                    data.push(storyData);

                });

                Promise.all(data).then(res => {
                    this.setState({
                        storyData: res
                    })
                })


            })



    }

    render(){

        const {storyData} = this.state;

        const storyTitleView = storyData.length > 0 ?
            storyData.map((item,index) => (
                <div key={index}>
                    The {index + 1} story title {item.title}
                </div>
            ))

            : '';

        return (
            <div>
                 {storyTitleView};
            </div>
        )
    }

}