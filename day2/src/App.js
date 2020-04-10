import React, { Component } from 'react';
import "./App.css"
const movie = {
  title: "Avengers Infinity war",
  vote_average: 8.5,
  image: "https://upload.wikimedia.org/wikipedia/ru/0/05/Avengers-_Infinity_War_%28Original_Motion_Picture_Soundtrack%29.jpg",
  overwiev: "Having acquired the Power Stone, one of the six Infinity Stones, from the planet Xandar, Thanos and his lieutenants—Ebony Maw, Cull Obsidian, Proxima Midnight, and Corvus Glaive—intercept the spaceship carrying the survivors of Asgard's recent destruction."
}
function Image(props) {
  return (
    <img width="100%" src={props.src} alt={props.title} />
  )
}


// function MovieItem(props) {
//   console.log(props)
//   const { data: { title, vote_average, image, overwiev } } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       {/* <p>{props.data.title}</p>
//       <p>{props.data.vote_average}</p> */}

//       {/* С помощью деструктуризации */}
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   )
// }

class MovieItem extends Component {
  constructor() {
    super();


    this.state = {
      show: false,
      like: false
    }
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    })
  }
  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const { data: { title, vote_average, image, overwiev } } = this.props;
    console.log(this.state)
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>{this.state.show ? "Hide" : "Show"}</button>
          <button type="button" onClick={this.handleLike} className={this.state.like ? "btn--like" : ""}>Like</button>
        </div>
        {this.state.show === true ? <p>{overwiev}</p> : null}
      </div >
    )
  }
}

function App() {
  return (
    <div className="App">
      <MovieItem data={movie} />
    </div>
  );
}

export default App;
