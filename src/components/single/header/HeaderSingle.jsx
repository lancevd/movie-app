import React, { useEffect, useState } from 'react'
import { GiCalendar, GiClockwork } from 'react-icons/gi';
import vPoster from '../../../images/Withcher-poster.jpg';

const HeaderSingle = () => {
  const [movieDetails, setMovieDetails] = useState([])
  const getParams = window.location.search 
  
  function loadMovie() { 
    fetch(`https://api.themoviedb.org/3/movie/${videoID}?api_key=918790a038aea2ed15515872e62a5cb4&`)
      .then(response => response.json())
      .then(result => {
          setMovieDetails(result)
      })
      .catch(error => console.log('error', error));
  }

  let params = new URLSearchParams(getParams);
  const videoID = params.get('id');
  // console.log(videoID)

  useEffect(() =>{
    loadMovie()
}, [])
  return (
    <div id="single-header" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}')`,}}>
        <div id="sh-content" className='contain flex-col md:flex-row'>
            <div className='w-1/2 md:w-1/5 mt-4 md:mt-20 mx-auto'>
                <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt=""  />
            </div>

            <div id="single-details-contain" className='w-full md:w-4/5'>
              <div id="mov-det" className='mt-4 md:mt-20'>
                <h4 className='movie-title'>{movieDetails.title} </h4>
                <br/>
                <div className="genre-box">
                  {!movieDetails.genres ? 'Loading' : 
                    movieDetails?.genres.map((genre)=>(
                    <div className='single-genre'>{genre.name}</div>
                  ))}
                  
                </div>
                <br/>
                <div className="movie-lang">{ !movieDetails.spoken_languages ? 'Loading' : movieDetails.spoken_languages.map((lang)=>(lang.english_name + ' | '))} </div> 
                <br/>
                <div className="date-n-duration">
                  <div id="single-date">< GiCalendar/>{movieDetails.release_date} </div>
                  <div id="single-duration"><GiClockwork/>{`${parseInt(parseInt(movieDetails.runtime)/60)}hrs ${parseInt(movieDetails.runtime)%60}mins` } </div>
                </div>
                <br/>
              </div>

              <div id="single-head-foot">
                <h5 id="single-rating">IMDB: {parseInt(movieDetails.vote_average)}/10 </h5>
                <button id="rent-now">Rent Now</button>
              </div>

            </div>
        </div>
        
    </div>
  )
}

export default HeaderSingle