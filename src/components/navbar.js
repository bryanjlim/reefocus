import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const styles = {
    root: {
        width: 100,
    },
};

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
            <Tabs value={value} onChange={this.handleChange}>
                <Tab value="/leaderboard"
                    label="Leaderboard"
                    className="navTab"
                    component={Link}
                    to="/leaderboard" />
                <Tab value="/"
                    label="Reef"
                    className="navTab"
                    component={Link}
                    to="/" />
                <Tab value="/store"
                    label="Store"
                    className="navTab"
                    component={Link}
                    to="/store" />
            </Tabs>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);