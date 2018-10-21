import React, { Component } from 'react';
import EventCard from './eventCard';
import '../../../App.css';
import firebase from 'firebase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import SnackBarMaker from '../../snackbar';

export class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            events: [],
            snackbarOpen: false,
            completedEventTitle: "",
        }

        this.getEvents().then((events) => {
            this.setState({
                events: events,
                isLoaded: true,
            });
        });

        this.getEvents = this.getEvents.bind(this);
        this.eachEvent = this.eachEvent.bind(this);
        this.completeEvent = this.completeEvent.bind(this);
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    completeEvent(eventid, eventtitle) {
        this.props.userData.events.push(eventid);
        this.props.userData.points += 50;
        this.props.updateFirestore();
        this.forceUpdate();
        this.setState({
            snackbarOpen: true,
            completedEventTitle: eventtitle,
        });
    }

    handleSnackbarClose() {
        this.setState({
            snackbarOpen: false,
        })
    }

    getEvents() {
        const firestore = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true};
        firestore.settings(settings);

        return new Promise((res, rej) => {
            const events = [];
            firestore.collection("events").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    const data = doc.data();
                    data.id = doc.id;
                    events.push(data);
                });
                res(events);
            });
        });
    }

    eachEvent(event) {

        if(this.props.userData.events.includes(event.id)) {
           return(<div></div>); 
        }
        return (
            <div>
                <EventCard 
                    completeEvent={(id, title) => {this.completeEvent(id, title)}}
                    name={event.name}
                    organization={event.organization}
                    location={event.location}
                    date={event.date}
                    url={event.url}
                    id={event.id}
                />
            </div>
        );
    }

    render() {
        if(!this.state.isLoaded) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <SnackBarMaker open={this.state.snackbarOpen} close={this.handleSnackbarClose}
                            message={"Congrats on completing " + this.state.completedEventTitle + "! You've gained 50 points"} />

                <Dialog
                open={this.props.open}
                onClose={this.props.close}
                aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Events"}</DialogTitle>
                    <DialogContent>
                        <div className="container">
                            <h1 className="userStatisticsTitle">Events</h1>
                            {this.state.events.map(this.eachEvent)}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.close} color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Events;