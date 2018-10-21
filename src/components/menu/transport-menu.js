import React, { Component } from 'react';
import WalkImg from "../../graphics/icon_walk.svg";
import CarpoolImg from "../../graphics/icon_carpool.svg";
import BusImg from "../../graphics/icon_transit.svg";
import BikeImg from "../../graphics/icon_bike.svg";

function alertDecision(action, points) {
    alert(action + ": +" + points);
}

export class TransportMenu extends Component {
    render() {
        return (
            <div className = "PlasticMenu">
                <img className = "Walk"
                    src = {WalkImg}
                    alt = "Walk"
                    onClick = {() => alertDecision("Walk", 10)}
                />
                <img className = "Carpool"
                    src = {CarpoolImg}
                    alt = "Carpool"
                    onClick = {() => alertDecision("Carpool", 5)}
                />
                <img className = "Bus"
                    src = {BusImg}
                    alt = "Public Transport"
                    onClick = {() => alertDecision("Bus", 5)}
                />
                <img className = "Bike"
                    src = {BikeImg}
                    alt = "Bike"
                    onClick = {() => alertDecision("Bike", 10)}
                />

            </div>

        )
    }
}
export default TransportMenu;


