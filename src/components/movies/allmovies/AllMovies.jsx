import React, { useEffect, useState } from 'react'
import poster from '../../../images/Withcher-poster.jpg'
import AllMoviesCard from '../../AllMoviesCard';

const AllMovies = () => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [totalResults, setTotalResults ]= useState();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      useEffect(() =>{
          fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=918790a038aea2ed15515872e62a5cb4&page=${pageNo}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setMoviesList(result.results)
                console.log(result)
            })
            .catch(error => console.log('error', error));   
      },[])

  return (
    <div className="contain grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">        
        {moviesList.map((item) => (
            <AllMoviesCard  title={item.original_title} id={item.id} poster={item.poster_path} date={item.release_date} />
        ))}
        <div className="spacer"></div>

        <div className="movies-pagination">

            <div className="page-box">1</div>
            <div className="page-box">2</div>
            <div className="page-box">3</div>
            <div className="page-box">4</div>
            <div className="page-box">5</div>
            <div className="page-box">6</div>
            <div onClick={e => setPageNo(pageNo+1)} className="page-box">Next</div>
        </div>

    </div>
  )
}

export default AllMovies