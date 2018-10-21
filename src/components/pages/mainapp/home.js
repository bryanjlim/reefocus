import React, { Component } from 'react';
import Background from '../../../graphics/reefocus background 1.3.jpg';
import FanCoral from '../../../graphics/fan coral 1.2.svg';
import PinkCoral from '../../../graphics/fan coral 0.2.svg';
import Starfish from '../../../graphics/starfish 1.1.svg';
import BrainCoral from '../../../graphics/brain coral 0.2.svg';
import SeaSponge from '../../../graphics/seasponge 0.1.svg';
import Seaweed from '../../../graphics/seaweed 0.1.svg';
import Fish from '../../../graphics/Fish/yellowtang.svg';
import Fish2 from '../../../graphics/Fish/clownfish.svg';
import Fish3 from '../../../graphics/Fish/lyretail_anthias.svg';

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

                {(this.props.userDataStore.points > 200) ?
                    <div>
                        <img className="coral1" src={PinkCoral} />
                        <img className="coral2" src={FanCoral} />
                        <img className="fish2" src={Fish2} />
                    </div> : null
                }
                {(this.props.userDataStore.points > 100) ?
                    <div>
                        <img className="fish3" src={Fish3} />
                        <img className="seasponge" src={SeaSponge} />
                        <img className="starfish" src={Starfish} />
                    </div> : null
                }

                <img className="fish" src={Fish} />

                <img className="braincoral" src={BrainCoral} />
                <img className="seaweed" src={Seaweed} />
            </div>
        );
    }
}

export default Home;