import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Home, Equalizer, ShoppingCart } from '@material-ui/icons';
import MainMenu from './menu/menu-choices';
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
            <div>
               

                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    className="nav primary">

                    <BottomNavigationAction icon={<Equalizer />} value="/info" label="Info" component={Link} to="/info" />
                    <BottomNavigationAction icon={<Home />} value="/" label="Reef" component={Link} to="/" />
                    <BottomNavigationAction icon={<ShoppingCart />} value="/store" label="Shop" component={Link} to="/store" />
                </BottomNavigation>
                <MainMenu userData={this.props.userData} updateFirestore={this.props.updateFirestore}/>
            </div>
        );
    }
}

export default Navbar;