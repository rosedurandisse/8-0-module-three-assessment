import { Component } from "react";

class People extends Component {
    constructor() {
        super();
        this.state = {
            peopleData: [],
            userInput: '',
            personSearched: ''
        };
    }



    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((response) => response.json())
            .then((listOfPeople => this.setState({ peopleData: listOfPeople })))
    }

    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const personFound = this.state.peopleData.find((eachPerson) => (eachPerson.name === this.state.userInput))
        console.log(personFound)
        if (personFound === undefined) {
            this.setState({
                personSearched: 0,
            })
        } else {
            this.setState({
                found: true,
                personSearched: personFound,
            })
        }
    }


    render() {

        return (
            <div className="people">
                <p> Search for a Person </p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='UserInput'
                        id='UserInput'
                        type="text"
                        placeholder="Find Your Person"
                        value={this.state.userInput}
                        onChange={this.handleUserInput}
                        required
                    />
                    <button>Submit</button>
                </form>

                {this.state.personSearched !== 0 ? <div>
                    <p>Name: {this.state.personSearched.name}</p>
                    <p>Age: {this.state.personSearched.age}</p>
                    <p>Gender: {this.state.personSearched.gender}</p>
                </div> : 'Not Found'}


            </div>

        )
    }
}

export default People;