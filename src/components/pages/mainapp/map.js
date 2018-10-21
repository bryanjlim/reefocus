import React, { Component } from 'react';
import HEREMap, { Marker } from 'react-here-maps';
import firebase from 'firebase';
 
export class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
        }

        this.getEvents().then((events) => {
            this.state = {
                events: events,
            };
        });

        this.getEvents = this.getEvents.bind(this);
        this.eachMarker = this.eachMarker.bind(this);
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

    eachMarker(event) {
        const center = { lat: event.geolocation , lng: -event.geolocation }

        return (
            <div>
                <Marker {...center}>
                    <div className="circle-marker"></div>
                </Marker>
            </div>
        );
    }

    render() {
        return (
            <HEREMap 
                appId="PUIfToPKq2VTuNdh4Qcp"
                appCode="CkkqR0M-MDHxwXrOdXQ8vA"
                center={{ lat: 47.6, lng: -122.3 }}
                zoom={10}
            > 
                {this.state.events.map(this.eachMarker)}
            </HEREMap>
        )
    }
}
export default Map;