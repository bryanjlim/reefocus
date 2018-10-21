import React, { Component } from 'react';
import Background from '../../../graphics/reefocus background 1.2.svg';
import FanCoral from '../../../graphics/fan coral 0.1.svg';
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startup: props.startup
        };
        this.props.isDone();
    }
    render() {
        return (
            <div className="mainContainer">
                <img className="background" src={Background} />
                <img className="coral1" src={FanCoral} />
            </div>
        );
    }
}

export default Home;