import React, { Component } from 'react';
import Background from '../../../graphics/reefocus background 1.2.svg';
export class Home extends Component {
    render() {
        return (
            <div>
                <div className="mainContainer">
                    <h1 className="AppName">Reefocus</h1>
                    <img className="background" src={Background}></img>
                </div>
            </div>
        );
    }
}

export default Home;