import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../../../App.css';


export class Info extends Component {
    render() {
        return (
            <div className="infoContainer">
                <h1 className="userStatisticsTitle">User Statistics</h1>
                <Card className="reuseInfoCard">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Your Reef
                        </Typography>
                        <Typography component="p">
                            Points: {this.props.userData.points}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="reuseInfoCard">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Reuse
                        </Typography>
                        <Typography component="p">
                            Water Bottles Avoided: {this.props.userData.bringWaterBottleCount}
                        </Typography>
                        <Typography component="p">
                            Extra Packaging Refused: {this.props.userData.refuseExtraPackagingCount}
                        </Typography>
                        <Typography component="p">
                            Personal Bag Reused: {this.props.userData.bringOwnBagCount}
                        </Typography>
                        <Typography component="p">
                            Compostables Used: {this.props.userData.bringCompostableObjectCount}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="travelInfoCard">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Commute
                        </Typography>
                        <Typography component="p">
                            Carpools: {this.props.userData.carpoolCount}
                        </Typography>
                        <Typography component="p">
                            Transit Rides: {this.props.userData.publicTransitCount}
                        </Typography>
                        <Typography component="p">
                            Bike Trips: {this.props.userData.bikeCount}
                        </Typography>
                        <Typography component="p">
                            Walks: {this.props.userData.walkCount}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="engageInfoCard">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Engage
                        </Typography>
                        <Typography component="p">
                            Events Attended: {this.props.userData.events.length}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Info;