import { Component } from "react";

class Locations extends Component {
    constructor() {
        super();
        this.state = {
            locationData: [],
            hideLocationFeature: true,
            showLocationFeature: false,

        };
    }

    handleShowLocationButtonClick = (event) => {
        this.setState({
            hideLocationFeature: false,
            showLocationFeature: true,
        })

    }

    handleHideLocationButtonClick = (event) => {
        this.setState({
            locationData: [],
            hideLocationFeature: true,
            showLocationFeature: false,
        })
    }


    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/locations')
            .then((response) => response.json())
            .then((listOfLocations => this.setState({ locationData: listOfLocations })))
    }
    render() {
        const locationList = this.state.locationData.map((eachLocation) => {
            return (
                <li>
                    <div> {eachLocation.name} </div>
                    <div>{eachLocation.climate}</div>
                    <div> {eachLocation.terrain} </div>
                </li>
            )
        })

        console.log(this.state.locationData)

        return (

            <div className='locations'>
                <p>List of Locations </p>
                {/* <button
                    type='submit'
                    // onClick={this.handleShowLocationButtonClick}
                >Show Locations</button> */}

                {/* {this.state.hideLocationFeature ? */}
                <button onClick={this.handleShowLocationButtonClick}>Show Locations</button>
                <button onClick={this.handleHideLocationButtonClick}>Hide Locations</button>
                {locationList}

            </div>
        )
    }
}




export default Locations;