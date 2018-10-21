import React, { Component } from 'react';
import Background from '../../../../public/graphics/reefocus background 1.2.svg';
export class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="AppName">Reefocus</h1>
                    <img src={Background}></img>
                </div>
            </div>
        );
    }
}

export default Home;