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
  render() {
    console.log(this)
    return (
      <div> {this.state.movies.map((movie) => {
        return <p>{movie.title}</p>
      })}</div >
    )
  }
}
export default App;
