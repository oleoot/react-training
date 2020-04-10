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
      <div> {this.state.movies[0].title}</div >
    )
  }
}
export default App;
