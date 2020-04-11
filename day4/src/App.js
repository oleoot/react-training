import React, { Component } from 'react';
import "./App.css"
import moviesData from "./moviesData"
import movieItem from "./movieItem"
import MovieItem from './movieItem';

// UI = fn(state, props)

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    }
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item) {
      return (
        item.id !== movie.id
      )
    })
    this.setState({
      movies: updateMovies
    })
    console.log(updateMovies)
  }


  addMovieToWillWatch = (movie) => {

    console.log(movie)
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem movie={movie} removeMovie={this.removeMovie} addMovieToWillWatch={this.addMovieToWillWatch} />
                  </div>

                )
              }
              )
              }
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>

      </div >
    )
  }
}
export default App;
