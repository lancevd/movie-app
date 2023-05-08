import React from 'react'
import { Link } from 'react-router-dom'

export function AllMoviesCard(props) {
    return (
        <div className="movie-box">
          <Link to={`/single?id=${props.id}`}><img src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt={props.title} /></Link>
          <div className="movie-info">
            <Link to={`/single?id=${props.id}`}><h5 className="text-sm md:text-xl mov-title break-words ...">{props.title}</h5></Link>
            <div className="year text-white">{props.date.slice(0,4)}</div>
            {/* <div className="genre">Action | Adventure</div> */}
          </div>
        </div>  
    )
  }

export default AllMoviesCard