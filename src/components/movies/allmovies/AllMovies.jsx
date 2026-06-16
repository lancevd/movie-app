import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AllMoviesCard from "../../AllMoviesCard";

const AllMovies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  // read URL params: ?filter=...&genre=...
  const params = new URLSearchParams(location.search);
  const filter = params.get("filter");
  const genre = params.get("genre");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    // choose endpoint according to search/filter
    let url = "";
    if (genre) {
      // discover by genre
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&page=${pageNo}`;
    } else if (filter === "popular") {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNo}`;
    } else if (filter === "upcoming") {
      url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${pageNo}`;
    } else if (filter === "trending") {
      url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=${pageNo}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${pageNo}`;
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // defensive: ensure results is an array
        const list = Array.isArray(result?.results) ? result.results : [];
        setMoviesList(list);
        setTotalPages(result?.total_pages || 1);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, [pageNo, filter, genre, apiKey]);

  return (
    <div className="contain">
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {moviesList.map((item) => (
          <AllMoviesCard
            key={item.id}
            title={item.original_title}
            id={item.id}
            poster={item.poster_path}
            date={item.release_date}
          />
        ))}
        <div className="spacer"></div>
      </div>
      <div className="w-full mx-auto">
        <div className="movies-pagination">
          {/* 
            <div className="page-box">1</div>
            <div className="page-box">2</div>
            <div className="page-box">3</div>
            <div className="page-box">4</div>
            <div className="page-box">5</div>
            <div className="page-box">6</div> */}
          <div
            onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
            className="page-box"
          >
            Prev
          </div>
          <div className="page-box">
            {pageNo} / {totalPages}
          </div>
          <div
            onClick={() => setPageNo((prev) => Math.min(prev + 1, totalPages))}
            className="page-box"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
