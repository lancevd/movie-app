import React from 'react'
import { Link } from 'react-router-dom'

export function MovieCard(props) {
    return (
        <div className="movie-box">
          <Link to={`/single`}><img src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt={props.title} /></Link>
          <div className="movie-info">
            <Link to={`/single/?${props.title}`}><h5 className="mov-title">{props.title}</h5></Link>
            <div className="year">{props.date.slice(0,4)}</div>
            {/* <div className="genre">Action | Adventure</div> */}
          </div>
        </div>  
    )
  }

export default MovieCard