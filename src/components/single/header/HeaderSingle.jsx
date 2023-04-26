import React from 'react'
import { GiCalendar, GiClockwork } from 'react-icons/gi';
import vPoster from '../../../images/Withcher-poster.jpg';

const HeaderSingle = () => {
  return (
    <div id="single-header">
        <div id="sh-content" className='container'>
            <div id="v-poster">
                <img src={vPoster} alt="" />
            </div>

            <div id="single-details-contain">
              <div id="mov-det">
                <h4 className='movie-title'>One Shot</h4>
                <br/>
                <div className="genre-box">
                  <div className='single-genre'>Horror</div>
                  <div className='single-genre'>Thriller</div>
                  <div className='single-genre'>Drama</div>
                </div>
                <br/>
                <div className="movie-lang">English</div>
                <br/>
                <div className="date-n-duration">
                  <div id="single-date">< GiCalendar/> 3rd December, 2022</div>
                  <div id="single-duration"><GiClockwork/> 2:05:23</div>
                </div>
                <br/>
              </div>

              <div id="single-head-foot">
                <h5 id="single-rating">IMDB: 8/10</h5>
                <button id="rent-now">Rent Now</button>
              </div>

            </div>
        </div>
        
    </div>
  )
}

export default HeaderSingle