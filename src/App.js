import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import { SignIn } from './components/pages/signIn/signIn';
import { Home } from './components/pages/mainapp/home';
import { Leaderboard } from './components/pages/mainapp/leaderboard';
import { Store } from './components/pages/mainapp/store';
import { Navbar } from './components/navbar'
export class App extends Component {
  constructor(props) {
    super(props);

    const config = {
      apiKey: "AIzaSyDG6I5-16WszdcXaLgb3IGTBab1zJmbFCU",
      authDomain: "reefocus-app.firebaseapp.com",
      databaseURL: "https://reefocus-app.firebaseio.com",
      projectId: "reefocus-app",
      storageBucket: "reefocus-app.appspot.com",
      messagingSenderId: "567857954394"
    };
    firebase.initializeApp(config);

    var user = firebase.auth().currentUser;

    if (user) {
      this.state = {
        isSignedIn: true,
      }
    } else {
      this.state = {
        isSignedIn: false,
      }
    }

    this.signIn = this.signIn.bind(this);
    this.googleAuthentication = this.googleAuthentication.bind(this);
  }

  signIn() {
    this.googleAuthentication().then(() => {
      this.setState({ isSignedIn: true });
    }).catch((e) => {
      console.log("error: " + e);
    });
  }

  googleAuthentication() {
    const provider = new firebase.auth.GoogleAuthProvider();

    return new Promise((res, err) => {
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        res();
      }).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        err(errorCode + errorMessage + email + credential);
      });
    });
  }

  render() {
    if (this.state.isSignedIn) {
      return (
        <div className="App">
          <header className="App-header">
            {
              (this.props.location.pathname == "/") ? <Home /> :
                (this.props.location.pathname == "/leaderboard") ? <Leaderboard /> :
                  (this.props.location.pathname == "/store") ? <Store /> : null
            }
            <Navbar location={this.props.location.pathname}/>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <SignIn signIn={this.signIn} />
          </header>
        </div>
      )
    }
  }
}

export default App;
