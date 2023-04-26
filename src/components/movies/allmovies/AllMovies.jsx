import React from 'react'
import poster from '../../../images/Withcher-poster.jpg'

const AllMovies = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=918790a038aea2ed15515872e62a5cb4&language=en-US", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  return (
    <div id="all-movies" className="container">
        <div id="movies-grid">
            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>

            <div className="movie">
                <div className="movie-image">
                    <img src={poster} alt="" />
                </div>
                <div className="movie-details">
                    <h5 className="movie-title">The Witcher</h5>
                    <div className="movie-year">2021</div>
                    <div className="movie-genre">Action | Adventure</div>
                    <button className='rent-btn'>Rent</button>
                </div>
            </div>
        </div>
        
        <div className="spacer"></div>

        <div className="movies-pagination">
            <div className="page-box">1</div>
            <div className="page-box">2</div>
            <div className="page-box">3</div>
            <div className="page-box">4</div>
            <div className="page-box">5</div>
            <div className="page-box">6</div>
        </div>

    </div>
  )
}

export default AllMovies