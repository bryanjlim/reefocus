import React, { Component } from 'react';
import './App.css';
import BagImg from "./Bag.svg";
import CupImg from "./Bottle.svg";
import KnifeImg from "./Knife.svg";
import RefuseImg from "./Refuse.svg";

function alertDecision(action, points) {
    alert(action + ": +" + points);
}

export class PlasticMenu extends Component {
    render() {
        return (
            <div className = "PlasticMenu">
                <img className = "Bag"
                    src = {BagImg}
                    alt = "Bring your own bag"
                    onClick = {() => alertDecision("Bring your own bag", 10)}
                    
                />
                <img className = "Cup"
                    src = {CupImg}
                    alt = "Bring your own cup/bottle"
                    onClick = {() => alertDecision("Bring your own cup/bottle", 10)}
                />
                <img className = "Knife"
                    src = {KnifeImg}
                    alt = "Use non-plastic cutlery"
                    onClick = {() => alertDecision("Use non-plastic cutlery", 10)}
                />
                <img className = "Refuse"
                    src = {RefuseImg}
                    alt = "Refuse extra packaging"
                    onClick = {() => alertDecision("Refuse extra packaging", 10)}
                />

            </div>

        )
    }
}
export default PlasticMenu;