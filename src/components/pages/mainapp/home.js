import React, { Component } from 'react';
import Background from '../../../graphics/reefocus background 1.2.svg';
import FanCoral from '../../../graphics/fan coral 1.2.svg';
import PinkCoral from '../../../graphics/fan coral 0.2.svg';
import Starfish from '../../../graphics/starfish 1.1.svg';
import BrainCoral from '../../../graphics/brain coral 0.2.svg';
import SeaSponge from '../../../graphics/seasponge 0.1.svg';
import Seaweed from '../../../graphics/seaweed 0.1.svg';

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
                <img className="braincoral" src={BrainCoral} />
                <img className="starfish" src={Starfish} />
                <img className="coral1" src={PinkCoral} />
                <img className="coral2" src={FanCoral} />
                <img className="seasponge" src={SeaSponge} />
                <img className="seaweed" src={Seaweed} />
            </div>
        );
    }
}

export default Home;