import React, {useState, useEffect} from 'react'

const SingleBody = () => {
    const [movieDetails, setMovieDetails] = useState([])
    const [videos, setVideos] = useState([])
  const getParams = window.location.search 
  
  function loadMovie() { 
    fetch(`https://api.themoviedb.org/3/movie/${videoID}?api_key=918790a038aea2ed15515872e62a5cb4&`)
      .then(response => response.json())
      .then(result => {
          setMovieDetails(result)
          console.log(movieDetails)
      })
      .catch(error => console.log('error', error));
  }


  let params = new URLSearchParams(getParams);
  const videoID = params.get('id');
  // console.log(videoID)
  
  useEffect(() =>{
      loadMovie()
      fetch(`https://api.themoviedb.org/3/movie/${videoID}/videos?api_key=918790a038aea2ed15515872e62a5cb4&`)
          .then(response => response.json())
          .then(result => {
              setVideos(result.results[0])
            //   console.log(videos)
          })
          .catch(error => console.log('error', error));
    // loadVideos() 
}, [])
  return (
    <div id='single-body' className='container flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/5'>
            <h5>Produced by:</h5>
            <br/>
            {!movieDetails.production_companies ? "Loading" : movieDetails.production_companies.map((company) => (
                <div className='flex flex-col border border-[#c5c4c4] p-4 rounded-xl gap-4 mb-4'>
                    <img src={`https://image.tmdb.org/t/p/original/${company.logo_path}`} alt={company.name} />
                    <h5>{company.name}</h5>
                </div>
            ))}
        </div>
        <div className='w-full md:w-4/5'>
            <div id="single-photos">
                <h4>Trailer</h4>
                <br />
                
                {!videos.key ? <h5 color='#fff'>No Video Available</h5> : <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${videos.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>}
            </div>

            <div className="spacer"></div>

            <div id="mov-summary">
                <h4>Overview</h4>
                <br />
                <p>{movieDetails.overview} </p> 
            </div>
        </div>
    </div>
  )
}

export default SingleBody