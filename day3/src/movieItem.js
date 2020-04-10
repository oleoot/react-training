import React from "react"

const MovieItem = (props) => {
    return (
        <div>
            <p>{props.movie.title}</p>
            <button type="button" onClick={props.removeMovie.bind(this, props.movie)}>Delete Movie</button>
        </div>
    )
}
export default MovieItem
