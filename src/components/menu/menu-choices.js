import React, { Component } from 'react';
import transportImg from "../../graphics/icon_transportation.svg"
import plasticImg from "../../graphics/icon_actions.svg"
import eventImg from "../../graphics/icon_events.svg"
import PlasticMenu from "./PlasticMenu.js"
import TransportMenu from "./transport-menu"
import logImg from "../../graphics/icon_plus.svg"
import minusImg from "../../graphics/icon_minus.svg"
import { Events } from '../pages/mainapp/events'
import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'


export class MainMenu extends Component {
    
    constructor(props) {
       super(props);
       this.state = {
           current: "default",
           showEventsDialog: false,
           slideMainIn: true,
        };

        this.closeEventsDialog = this.closeEventsDialog.bind(this);
   }

   closeEventsDialog() {
       this.setState({
           showEventsDialog: false,
       })
   }

    render() {
        if(this.state.current == "default") {
            return (
                <div>
                    {this.state.slideMainIn ?
                        <Slide direction="up" in={this.state.slideMainIn}>
                        <img
                            className = "Log" 
                            src = {logImg}
                            alt = "Log"
                            onClick = {() => this.setState({current: "main", slideMainIn: false,})}
                        /> 
                    </Slide> :
                    <img
                        className = "Log" 
                        src = {logImg}
                        alt = "Log"
                        onClick = {() => this.setState({current: "main", slideMainIn: false,})}
                    /> 
                    }
                </div>
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
                    <Fade in={true}>
                    <div className="moveUp">
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
                            onClick = {() => {this.setState({current: "Events", showEventsDialog: true});}}
                        />
                        </div>
                    </Fade>
                </div>
        )
        }  else if (this.state.current == "Plastic" ){
            return (
                <div>
                    <PlasticMenu userData={this.props.userData} updateFirestore={this.props.updateFirestore}/>
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
                    <TransportMenu userData={this.props.userData} updateFirestore={this.props.updateFirestore}/>
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
            // Events page popup
            return (
                <div>
                    <Events open={this.state.showEventsDialog} close={this.closeEventsDialog} 
                            userData={this.props.userData} updateFirestore={this.props.updateFirestore}/>
                    <img
                        className = "Log" 
                        src = {logImg}
                        alt = "Log"
                        onClick = {() => this.setState({current: "main"})}
                    /> 
                </div>
            );
        }
    }   
}

export default MainMenu;