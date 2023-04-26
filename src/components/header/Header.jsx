import React, { useEffect, useState } from 'react'
// import {FaBell} from 'react-icons/fa'
import {MdSearch} from 'react-icons/md'
import {MdPerson} from 'react-icons/md'
import {MdNotifications} from 'react-icons/md'
import Hero from '../hero/Hero'
import {Link, BrowserRouter as Router} from 'react-router-dom';



const Header = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=918790a038aea2ed15515872e62a5cb4&language=en-US", requestOptions)
      .then(response => response.json())
      .then(result => {
        setNowPlaying(result?.results[1])
        console.log(nowPlaying)
      })
      .catch(error => console.log('error', error));
  }, [])
  

  return (  
    <header style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${nowPlaying.backdrop_path}')`,}}>
      <div id="header-overlay">
        <NavBar />  
        <div className="spacer"><br /></div>
        <Hero />
      </div>
    </header>
  )
}

export function NavBar () {
  return (
    <nav className="container">
        <div id="logo"><a href="#"><h2>MovRent</h2></a></div>

        <div id="nav-links">
          <Link to='/' > Home </Link>
          <Link to='movies' > Movies </Link>
          <Link to='/pricing' > Pricing </Link>
          <Link to='/about' > About </Link>
        </div>

        <div id="nav-icons">
          <h4 className='nav-icon'><MdNotifications /></h4>
          <h4 className='nav-icon'><MdSearch /></h4>
          <h4 className='nav-icon'><MdPerson /></h4>
        </div>

      </nav> 
  )
}

export default Header