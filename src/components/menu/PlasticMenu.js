import React, { Component } from 'react';
import BagImg from "../../graphics/icon_bag.svg";
import CupImg from "../../graphics/icon_bottle.svg";
import KnifeImg from "../../graphics/icon_fork.svg";
import RefuseImg from "../../graphics/icon_packaging.svg";

function alertDecision(action, points) {
    alert(action + ": +" + points);
}

export class PlasticMenu extends Component {
    bringOwnBottle() {
        this.props.userData.bringWaterBottleCount++;
        this.props.updateFirestore();
    }

    refuseExtraPackaging() {
        this.props.userData.refuseExtraPackagingCount++;
        this.props.updateFirestore();
    }

    bringOwnBag() {
        this.props.userData.bringOwnBagCount++;
        this.props.updateFirestore();
    }

    bringCompostableObject() {
        this.props.userData.bringCompostableObjectCount++;
        this.props.updateFirestore();
    }

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