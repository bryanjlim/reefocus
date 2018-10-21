import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, CardHeader, IconButton, Button, Typography, Menu, MenuItem, withStyles} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    eventCard: {
        left: 0,
        marginTop: 20,
        maxWidth: 575,
    },
    eventCardTitle: {
        fontSize: 16,
        marginBottom: 5,
    },
    eventCardPos: {
        marginBottom: 12,
    }
});

class EventCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
        this.handleMenuOpen = this.handleMenuOpen.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
    }

    handleMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

        return (
            <Card className={classes.eventCard}>
                <CardContent>
                    <Typography className={classes.eventCardTitle}>
                        {this.props.name}
                    </Typography>
                    <Typography component="p">
                        <b>When: </b> {this.props.date}
                    </Typography>
                    <Typography component="p">
                        <b>Where: </b> {this.props.location}
                    </Typography>
                    <Typography component="p">
                        <b>Hosted By: </b> {this.props.organization}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => {this.props.completeEvent(this.props.id, this.props.name)}} size="small">Complete</Button>
                    <Button href={this.props.url} size="small">Website</Button>
                </CardActions>
            </Card>
        );
    }
}

EventCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);