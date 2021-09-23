// Code DigitalClicker Component Here

import React, { Component } from "react";

export default class DigitalClicker extends Component {

    constructor() {
        super()
            //initial state
            //This component has an initial state property called timesClicked, which is initially defined as 0.
            this.state = {
                timesClicked: 0,
            };
    }

    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked+1
        }))
    }
    

    render() {
        return (
        <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        </div>
        )
    }
}