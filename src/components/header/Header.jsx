import React, { useEffect, useState } from 'react'
// import {FaBell} from 'react-icons/fa'
import {MdSearch} from 'react-icons/md'
import {MdPerson} from 'react-icons/md'
import {MdNotifications} from 'react-icons/md'
import Hero from '../hero/Hero'
import {Link, BrowserRouter as Router} from 'react-router-dom';



const Header = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  const [playingId, setplayingId] = useState([])
  const [videoSlide, setvideoSlide] = useState([])
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=918790a038aea2ed15515872e62a5cb4&language=en-US", requestOptions)
      .then(response => response.json())
      .then(result => {
        setNowPlaying(result.results[0])
        setplayingId(result.results)
        console.log(playingId)
      })
      .catch(error => console.log('error', error));

      getVideo()
  }, [])

  function getVideo() {
    if (playingId) { 
        playingId.forEach(element => {
          // console.log(element.id) 
          fetch(`https://api.themoviedb.org/3/movie/${element.id}/videos?api_key=918790a038aea2ed15515872e62a5cb4&`)
          .then(response => response.json())
          .then(result => {
            setvideoSlide(result.results[0])
            // console.log(videoSlide) 
          })
          .catch(error => console.log('error', error));
      });
    
    }
  }
  

  return (  
    <header style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${nowPlaying.backdrop_path}')`,}}>
      <div id="header-overlay">
        <NavBar />  
        <div className="spacer"><br /></div>
        <Hero />
        {/* {!videoSlide ? <h5 color='#fff'>No Video Available</h5> : videoSlide.map((video)=>(
          <div className=' contain border w-full md:w-1/3 lg:w-1/4 h-36 md:h-48'>
            { <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>}
          </div>  
        ))} */}
      </div>
    </header>
  )
}

export function NavBar () {
  // const [navMobile, setNavMobile] = useState('hidden')  
  return (
    <nav className="contain flex-col md:flex-row gap-3">
        
            <div id="logo">
              <a href="/" className='text-xl font-ubuntu font-bold lg:font-bold md:text-2xl lg:text-4xl'>MovRent</a>
            </div>

            <ul class="flex items-center gap-6 text-sm">
                  <li>
                    <Link className='text-base lg:text-xl' to='/' > Home </Link>
                  </li>
                  <li>
                    <Link className='text-base lg:text-xl' to='/movies' > Movies </Link>
                  </li>
                  <li>
                    <Link className='text-base lg:text-xl' to='/#' > Pricing </Link>
                  </li>
                  <li>
                    <Link className='text-base lg:text-xl' to='/#' > About </Link>
                  </li>
            </ul>

            <div class="flex flex-row items-center gap-4 text-sm lg:text-lg">
                <h4 className='nav-icon text-lg lg:text-2xl'><MdNotifications /></h4>
                <h4 className='nav-icon text-lg lg:text-2xl'><MdSearch /></h4>
                <h4 className='nav-icon text-lg lg:text-2xl'><MdPerson /></h4>
            </div>

            {/* <div class="block md:hidden" onClick={e => setNavMobile('block')}>
                <button
                  class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
            </div> */}

    </nav> 
  )
}

export default Header