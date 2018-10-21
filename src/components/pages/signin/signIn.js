import React, { Component } from 'react';
import '../../../App.css'


export class SignIn extends Component {
    render(){
        return(
            <div>
                <img className="signInLogo" src={require('../../../graphics/ReefocusLogo.svg')} />
                <h4 className="signInLogoText">Reefocus - Gamifying an Eco-friendly Lifestyle</h4>
                <img onClick={this.props.signIn} className="signInButton" src={require('../../../graphics/signInButton.png')} />
            </div>
        );      
    }
}

export default SignIn