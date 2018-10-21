import React, { Component } from 'react';
import HEREMap from 'react-here-maps';
 
export class Map extends Component {
    render() {
        return (
            <HEREMap 
                appId="PUIfToPKq2VTuNdh4Qcp"
                appCode="CkkqR0M-MDHxwXrOdXQ8vA"
                center={{ lat: 47.6, lng: -122.3 }}
                zoom={10}
            />
        )
    }
}
export default Map;