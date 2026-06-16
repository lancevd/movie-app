import React, { useState, useEffect } from "react";

const SingleBody = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const [similar, setSimilar] = useState([]);
  const getParams = window.location.search;

  let params = new URLSearchParams(getParams);
  const videoID = params.get("id");
  // console.log(videoID)

  useEffect(() => {
    const key = process.env.REACT_APP_TMDB_API_KEY;
    // load movie details
    fetch(`https://api.themoviedb.org/3/movie/${videoID}?api_key=${key}&`)
      .then((response) => response.json())
      .then((result) => {
        setMovieDetails(result || {});
      })
      .catch((error) => console.log("error", error));

    // load videos
    fetch(
      `https://api.themoviedb.org/3/movie/${videoID}/videos?api_key=${key}&`,
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(Array.isArray(result?.results) ? result.results[0] : {});
      })
      .catch((error) => console.log("error", error));

    // fetch similar movies
    fetch(
      `https://api.themoviedb.org/3/movie/${videoID}/similar?api_key=${key}&page=1`,
    )
      .then((res) => res.json())
      .then((r) => setSimilar(Array.isArray(r?.results) ? r.results : []))
      .catch((err) => console.log(err));
  }, [videoID]);
  return (
    <div id="single-body" className="contain flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/5">
        <h5>Produced by:</h5>
        <br />
        {!movieDetails.production_companies
          ? "Loading"
          : movieDetails.production_companies.map((company) => (
              <div className="flex flex-col border border-[#c5c4c4] p-4 rounded-xl gap-4 mb-4">
                <img
                  src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                  alt={company.name}
                />
                <h5>{company.name}</h5>
              </div>
            ))}
      </div>
      <div className="w-full lg:w-4/5">
        <div id="single-photos">
          <h4>Trailer</h4>
          <br />

          {!videos.key ? (
            <h5 color="#fff">No Video Available</h5>
          ) : (
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videos.key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          )}
        </div>

        <div className="spacer"></div>

        <div id="mov-summary">
          <h4>Overview</h4>
          <br />
          <p>{movieDetails.overview} </p>
        </div>
        <div className="spacer"></div>
        <div id="similar-movies">
          <h4>Similar Movies</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {similar &&
              similar.map((item) => (
                <div key={item.id} className="card">
                  <a href={`/single?id=${item.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt={item.title}
                    />
                    <h5 className="mt-2">{item.title}</h5>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBody;
