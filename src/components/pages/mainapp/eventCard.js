import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, CardHeader, IconButton, Button, Typography, Menu, MenuItem, withStyles} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    eventCard: {
        marginTop: 20,
        minWidth: 275,
        maxWidth: 575,
    },
    eventCardTitle: {
        marginBottom: 16,
        fontSize: 14,
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
                <CardHeader
                    action={
                        <div>
                        <IconButton onClick={this.handleMenuOpen}>
                            <MoreVertIcon/>
                        </IconButton>
                            <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleMenuClose}
                            >
                            <MenuItem onClick={this.handleDelete}>View On Map</MenuItem>
                        </Menu>
                        </div>
                    }
                    title= {this.props.name}
                    subheader={this.props.date}
                />  
                <CardContent>
                    <Typography component="p">
                        <b>Hosted By: </b> {this.props.organization}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => {this.props.completeEvent(this.props.id, this.props.name)}} size="small">Complete</Button>
                    <Button href={this.props.url} size="small">View More</Button>
                </CardActions>
            </Card>
        );
    }
}

EventCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);