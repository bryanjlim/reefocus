import React, { Component } from 'react';
export class SignIn extends Component {
    render(){
        return(
            <div>
                <h1>Sign In</h1>
                <button onClick={this.props.signIn}>Sign In</button>
            </div>
        );      
    }
}

export default SignIn