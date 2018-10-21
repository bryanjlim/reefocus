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
            <div className="scrollContain">
                <div className={this.state.startup ? "mainContainer animate-down" : 
                    "mainContainer"}>
                    <h1 className="AppName">Reefocus</h1>
                    <img className="background" src={Background} />
                    <img className="coral1" src={FanCoral} />
                </div>
            </div>
        );
    }
}

export default Home;