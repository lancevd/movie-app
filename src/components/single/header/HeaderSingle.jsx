import React, { useEffect, useState } from "react";
import { GiCalendar, GiClockwork } from "react-icons/gi";
import vPoster from "../../../images/Withcher-poster.jpg";

const HeaderSingle = () => {
  const getParams = window.location.search;
  let params = new URLSearchParams(getParams);
  const videoID = params.get("id");

  const [movieDetails, setMovieDetails] = useState({});
  const [providerLink, setProviderLink] = useState("");

  useEffect(() => {
    if (!videoID) return;
    const key = "918790a038aea2ed15515872e62a5cb4";

    // load movie details
    fetch(`https://api.themoviedb.org/3/movie/${videoID}?api_key=${key}`)
      .then((response) => response.json())
      .then((result) => {
        setMovieDetails(result || {});
      })
      .catch((error) => console.log("error", error));

    // load providers
    fetch(
      `https://api.themoviedb.org/3/movie/${videoID}/watch/providers?api_key=${key}`,
    )
      .then((res) => res.json())
      .then((result) => {
        if (result && result.results) {
          const us = result.results["US"];
          if (us && us.link) setProviderLink(us.link);
          else {
            const first = Object.values(result.results)[0];
            if (first && first.link) setProviderLink(first.link);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [videoID]);

  const backdrop = movieDetails?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
    : "";
  const poster = movieDetails?.poster_path
    ? `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`
    : vPoster;

  const runtime = movieDetails?.runtime || 0;
  const hours = runtime ? Math.floor(runtime / 60) : 0;
  const minutes = runtime ? runtime % 60 : 0;

  return (
    <div
      id="single-header"
      style={{ backgroundImage: backdrop ? `url('${backdrop}')` : "none" }}
    >
      <div id="sh-content" className="contain flex-col md:flex-row">
        <div className="w-1/2 md:w-1/5 mt-4 md:mt-20 mx-auto">
          <img
            src={poster}
            alt={
              movieDetails?.title
                ? `${movieDetails.title} poster`
                : "Movie poster"
            }
          />
        </div>

        <div id="single-details-contain" className="w-full md:w-4/5">
          <div id="mov-det" className="mt-4 md:mt-20">
            <h4 className="movie-title">{movieDetails?.title || ""} </h4>
            <br />
            <div className="genre-box">
              {!Array.isArray(movieDetails?.genres)
                ? "Loading"
                : movieDetails.genres.map((genre) => (
                    <div key={genre.id || genre.name} className="single-genre">
                      {genre.name}
                    </div>
                  ))}
            </div>
            <br />
            <div className="movie-lang">
              {!Array.isArray(movieDetails?.spoken_languages)
                ? "Loading"
                : movieDetails.spoken_languages.map(
                    (lang) => lang.english_name + " | ",
                  )}{" "}
            </div>
            <br />
            <div className="date-n-duration">
              <div id="single-date">
                <GiCalendar />
                {movieDetails?.release_date}{" "}
              </div>
              <div id="single-duration">
                <GiClockwork />
                {`${hours}hrs ${minutes}mins`}{" "}
              </div>
            </div>
            <br />
          </div>

          <div id="single-head-foot">
            <h5 id="single-rating">
              IMDB:{" "}
              {movieDetails?.vote_average
                ? parseInt(movieDetails.vote_average)
                : ""}
              /10{" "}
            </h5>
            <a
              id="rent-now"
              href={
                providerLink || `https://www.themoviedb.org/movie/${videoID}`
              }
              target="_blank"
              rel="noreferrer"
            >
              Watch Movie
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSingle;
