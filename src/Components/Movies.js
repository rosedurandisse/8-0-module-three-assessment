import { Component } from "react";

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movieData: [],
            userChoseAMovie: false,
            selectedMovie: '',
        };
    }



    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((response) => response.json())
            .then((listOfMovies => this.setState({ movieData: listOfMovies })))
    }

    handleUserSelection = (event) => {
        event.preventDefault();

        if (event.target.value === 'no-movie') {
            this.setState({
                userChoseAMovie: false,
            })
        } else {

            const chosenMovie = this.state.movieData.find((eachMovie) => (eachMovie.title === event.target.value))
            this.setState({
                userChoseAMovie: true,
                selectedMovie: chosenMovie
            })
        }
    }


    render() {
        const movieDropdown = this.state.movieData.map((eachMovie) => {
            return (
                <option key={eachMovie.id} value={eachMovie.title}>{eachMovie.title}</option>
            )
        })
        const chosenMovieDetails =
            <div>
                <h2>{this.state.selectedMovie.title}</h2>
                <p>Released Date:{this.state.selectedMovie.release_date}</p>
                <p>{this.state.selectedMovie.description}</p>
            </div>


        return <div className='movies'>
            <p>Select a Movie</p>
            <label htmlFor='MovieList'>Movie</label>
            <select
                name="movieList"
                id="MovieList"
                onChange={this.handleUserSelection}
            >
                <option value='no-movie'> </option>
                {movieDropdown}
            </select>
            {this.state.userChoseAMovie && <div>{chosenMovieDetails} </div>}
            <h2></h2>


        </div >
    }
}

export default Movies;