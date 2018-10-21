import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import { SignIn } from './components/pages/signIn/signIn';
import { Home } from './components/pages/home/home';
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
    }

    const config = {
      apiKey: "AIzaSyDG6I5-16WszdcXaLgb3IGTBab1zJmbFCU",
      authDomain: "reefocus-app.firebaseapp.com",
      databaseURL: "https://reefocus-app.firebaseio.com",
      projectId: "reefocus-app",
      storageBucket: "reefocus-app.appspot.com",
      messagingSenderId: "567857954394"
    };
    firebase.initializeApp(config);

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      console.log(errorCode + errorMessage + email + credential);

      this.setState({ isSignedIn: true });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isSignedIn ? <Home /> : <SignIn signIn={this.signIn} />}

        </header>
      </div>
    );
  }
}

export default App;
