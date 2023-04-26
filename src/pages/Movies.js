import React from 'react'
import Footer from '../components/footer/Footer'
import { NavBar } from '../components/header/Header'
import AllMovies from '../components/movies/allmovies/AllMovies';
import FilterBar from '../components/movies/filterbar/FilterBar' 
import '../components/movies/filterbar/filterbar.css';
import '../components/movies/allmovies/allmovies.css';



const Movies = () => {
  return (
    <div>
        <NavBar />
        <div className='spacer' ></div>
        <FilterBar />
        <div className='spacer' ></div>
        <AllMovies />
        <div className='spacer' ></div>
        <Footer />
    </div>
  )
}

export default Movies