import React, { useEffect, useState } from 'react'
// import poster from '../../images/Withcher-poster.jpg'
import MovieCard from '../MovieCard'
import axios from 'axios';

const Featured = () => {
  const [popular, setPopular] = useState([])
  const API_KEY = '918790a038aea2ed15515872e62a5cb4'
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
useEffect(() => {  
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=918790a038aea2ed15515872e62a5cb4&language=en-US&page=1", requestOptions)
  .then(response => response.json())
  .then(result => {
    const featuredMovies = Array.from(result.results).splice(0,8)
    setPopular(featuredMovies)
    console.log(popular)  
  })
  .catch(error => console.log('error', error));
  
}, [])

  return (
    <section id="featured" className="container">
        <h2>The Most Popular Movies to Watch in 2023</h2>
        <div className="space"></div>
        <div id="filter">
            <div id="filter-buttons">
                <div className="filter-btn current">All</div>
                <div className="filter-btn">Rating</div>
                <div className="filter-btn">Vote</div>
                <div className="filter-btn">Latest</div>
                <div className="filter-btn">Genre</div>
            </div>

            <p>See more 10+</p>
        </div>
        <br />
        <h3>Popular</h3>
        <div className="space"></div>

        <div id="movies-list">
          {popular.map((item) => (
            <MovieCard  title={item.title} poster={item.poster_path} date={item.release_date} />
          ))}
        </div>
        <div className="spacer"></div>
        <div id="feat-but">
          <button id='see'>See All</button>
        </div>
    </section>
  )
}




export default Featured