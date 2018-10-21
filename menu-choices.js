import React, { Component } from 'react';
import './App.css';
import transportImg from "./Transport.svg"
import plasticImg from "./Plastic.svg"
import eventImg from "./Events.svg"
import PlasticMenu from "./PlasticMenu.js"
import TransportMenu from "./transport-menu"
import logImg from "./Log.svg"
import minusImg from "./Minus.svg"


export class MainMenu extends Component {
    
    constructor(props) {
       super(props);
       this.state = {current: "default"};
   }

    render() {
        if(this.state.current == "default") {
            return (
                <img
                    className = "Log" 
                    src = {logImg}
                    alt = "Log"
                    onClick = {() => this.setState({current: "main"})}
                /> 
            )
        } else if(this.state.current == "main") {
        return (
            <div className = "MainMenu">
                <img
                    className = "Minus" 
                    src = {minusImg}
                    alt = "Collapse"
                    onClick = {() => this.setState({current: "default"})}
                /> 
                <img className = "Transport"
                        src = {transportImg}
                        alt = "Transport Choices"
                        height = "75vh"
                        width = "75vh"
                        onClick = {() => this.setState({current: "Transport"})}
                />
                <img className = "Plastic"
                    src = {plasticImg}
                    alt = "Plastic Reduction"
                    height = "75vh"
                    width = "75vh"
                    onClick = {() => this.setState({current: "Plastic"})}
                />
                <img className = "Events"
                    src = {eventImg}
                    alt = "Eco Events"
                    height = "75vh"
                    width = "75vh"
                    onClick = {() => {this.setState({current: "Events"});}}
                />
            </div>
        )
        }  else if (this.state.current == "Plastic" ){
            return (
                <div>
                    <PlasticMenu />
                    <img
                    className = "Minus" 
                    src = {minusImg}
                    alt = "Collapse"
                    onClick = {() => this.setState({current: "default"})}
                /> 
                </div>
            );
        }  else if (this.state.current == "Transport"){
            return (
                <div>
                    <TransportMenu />
                    <img
                        className = "Minus" 
                        src = {minusImg}
                        alt = "Collapse"
                        onClick = {() => this.setState({current: "default"})}
                    />
                </div>
            )
        }
        else {
            return (
                <div>
                 <h1> "No events today. Check back later!" </h1>
                 <img
                    className = "Minus" 
                    src = {minusImg}
                    alt = "Collapse"
                    onClick = {() => this.setState({current: "default"})}
                 />
            </div>
            )
        }
    }   
}

export default MainMenu;