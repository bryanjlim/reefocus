import React, { Component } from 'react';
import WalkImg from "../../graphics/icon_walk.svg";
import CarpoolImg from "../../graphics/icon_carpool.svg";
import BusImg from "../../graphics/icon_transit.svg";
import BikeImg from "../../graphics/icon_bike.svg";
import SnackBarMaker from '../snackbar';

function alertDecision(action, points) {
    alert(action + ": +" + points);
}

export class TransportMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSnackbar: false, 
            message: "",
        }

        this.carpool = this.carpool.bind(this);
        this.bus = this.bus.bind(this);
        this.walk = this.walk.bind(this);
        this.bike = this.bike.bind(this);

        this.close = this.close.bind(this);
    }

    close() {
        this.setState({
            showSnackbar: false,
        });
    }

    carpool() {
        this.props.userData.carpoolCount++;
        this.props.userData.points += 5;
        this.props.updateFirestore();

        this.setState({
            showSnackbar: false,
        });

        this.setState({
            showSnackbar: true,
            message: "Good job carpooling! You've gained 5 points"
        });
    }

    bus() {
        this.props.userData.publicTransitCount++;
        this.props.userData.points += 5;
        this.props.updateFirestore();

        this.setState({
            showSnackbar: false,
        });

        this.setState({
            showSnackbar: true,
            message: "Good job taking public trasit! You've gained 5 points"
        });
    }

    walk() {
        this.props.userData.walkCount++;
        this.props.userData.points += 10;
        this.props.updateFirestore();

        this.setState({
            showSnackbar: false,
        });

        this.setState({
            showSnackbar: true,
            message: "Good job walking places! You've gained 10 points"
        });
    }

    bike() {
        this.props.userData.bikeCount++;
        this.props.userData.points += 10;
        this.props.updateFirestore();

        this.setState({
            showSnackbar: false,
        });

        this.setState({
            showSnackbar: true,
            message: "Good job biking places! You've gained 10 points"
        });
    }

    render() {
        return (
            <div className = "PlasticMenu">
                <img className = "Walk"
                    src = {WalkImg}
                    alt = "Walk"
                    onClick = {() => this.walk()}
                />
                <img className = "Carpool"
                    src = {CarpoolImg}
                    alt = "Carpool"
                    onClick = {() => this.carpool()}
                />
                <img className = "Bus"
                    src = {BusImg}
                    alt = "Public Transport"
                    onClick = {() => this.bus()}
                />
                <img className = "Bike"
                    src = {BikeImg}
                    alt = "Bike"
                    onClick = {() => this.bike()}
                />

                {this.state.showSnackbar ? <SnackBarMaker open={this.state.showSnackbar} message={this.state.message} close={this.close}/> : null}

            </div>

        )
    }
}
export default TransportMenu;


