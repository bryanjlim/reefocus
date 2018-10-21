import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { Home, Equalizer, ShoppingCart } from '@material-ui/icons'

export class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.location,

        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                className="nav primary">
                <BottomNavigationAction icon={<Equalizer />} value="/leaderboard" label="Leaderboard" component={Link} to="/leaderboard" />
                <BottomNavigationAction icon={<Home />} value="/" label="Reef" component={Link} to="/" />
                <BottomNavigationAction icon={<ShoppingCart />} value="/store" label="Shop" component={Link} to="/store" />
            </BottomNavigation>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Navbar;