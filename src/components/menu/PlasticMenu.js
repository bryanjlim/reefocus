import React, { Component } from 'react';
import BagImg from "../../graphics/icon_bag.svg";
import CupImg from "../../graphics/icon_bottle.svg";
import KnifeImg from "../../graphics/icon_fork.svg";
import RefuseImg from "../../graphics/icon_packaging.svg";
import SnackBarMaker from '../snackbar';
import Fade from '@material-ui/core/Fade'

export class PlasticMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSnackbar: false,
            message: "",
        }

        this.bringOwnBottle = this.bringOwnBottle.bind(this);
        this.refuseExtraPackaging = this.refuseExtraPackaging.bind(this);
        this.bringOwnBag = this.bringOwnBag.bind(this);
        this.bringCompostableObject = this.bringCompostableObject.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({
            showSnackbar: false,
        });
    }

    bringOwnBottle() {
        this.props.userData.bringWaterBottleCount++;
        this.props.userData.points += 10;
        this.props.updateFirestore();

        this.setState({
            showSnackbar: false,
        });

        this.setState({
            showSnackbar: true,
            message: "Good job reusing a bottle! You've gained 10 points"
        });
    }

    refuseExtraPackaging() {
        this.props.userData.refuseExtraPackagingCount++;
        this.props.userData.points += 10;
        this.props.updateFirestore();

        this.setState({
            showSnackbar: false,
        });

        this.setState({
            showSnackbar: true,
            message: "Good job reusing packaging! You've gained 10 points"
        });
    }

    bringOwnBag() {
        this.props.userData.bringOwnBagCount++;
        this.props.userData.points += 10;
        this.props.updateFirestore();

        this.setState({
            showSnackbar: false,
        });

        this.setState({
            showSnackbar: true,
            message: "Good job bringing your own bag! You've gained 10 points"
        });
    }

    bringCompostableObject() {
        this.props.userData.bringCompostableObjectCount++;
        this.props.userData.points += 10;
        this.props.updateFirestore();

        this.setState({
            showSnackbar: false,
        });

        this.setState({
            showSnackbar: true,
            message: "Good job using non-plastic cutlery! You've gained 10 points"
        });
    }

    render() {
        return (      
            <Fade in={true}>
            <div className = "PlasticMenu">
                <img className = "Bag"
                    src = {BagImg}
                    alt = "Bring your own bag"
                    onClick = {() => this.bringOwnBag()}
                    
                />
                <img className = "Cup"
                    src = {CupImg}
                    alt = "Bring your own cup/bottle"
                    onClick = {() => this.bringOwnBottle()}
                />
                <img className = "Knife"
                    src = {KnifeImg}
                    alt = "Use non-plastic cutlery"
                    onClick = {() => this.bringCompostableObject()}
                />
                <img className = "Refuse"
                    src = {RefuseImg}
                    alt = "Refuse extra packaging"
                    onClick = {() => this.refuseExtraPackaging()}
                />

                {this.state.showSnackbar ? <SnackBarMaker open={this.state.showSnackbar} message={this.state.message} close={this.close}/> : null}
            </div>
            </Fade>
        )
    }
}
export default PlasticMenu;