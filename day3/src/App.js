import React, { Component } from 'react';
import "./App.css"
import moviesData from "./moviesData"




class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: moviesData
    }
  }

  removeMovie(movie) {
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


  render() {
    return (
      <div> {this.state.movies.map((movie) => {
        return (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <button type="button" onClick={this.removeMovie.bind(this, movie)}>Delete Movie</button>
          </div>
        )
      })
      }</div >
    )
  }
}
export default App;
