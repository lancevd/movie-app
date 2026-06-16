import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AllSeries = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search");
  const filter = params.get("filter");

  useEffect(() => {
    const requestOptions = { method: "GET", redirect: "follow" };
    let url = "";
    const key = "918790a038aea2ed15515872e62a5cb4";
    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${encodeURIComponent(searchQuery)}&page=${pageNo}`;
    } else if (filter === "popular") {
      url = `https://api.themoviedb.org/3/tv/popular?api_key=${key}&page=${pageNo}`;
    } else if (filter === "airing_today") {
      url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&page=${pageNo}`;
    } else if (filter === "trending") {
      url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&page=${pageNo}`;
    } else {
      url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&page=${pageNo}`;
    }

    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        const list = Array.isArray(result?.results) ? result.results : [];
        setSeriesList(list);
        setTotalPages(result?.total_pages || 1);
      })
      .catch((err) => console.log(err));
  }, [pageNo, filter, searchQuery]);

  return (
    <div className="contain">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {seriesList &&
          seriesList.map((item) => (
            <div key={item.id} className="card">
              <a href={`/single?id=${item.id}&type=tv`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.name}
                />
                <h4>{item.name}</h4>
              </a>
            </div>
          ))}
      </div>
      <div className="movies-pagination mt-6">
        <div
          onClick={() => setPageNo((p) => Math.max(p - 1, 1))}
          className="page-box"
        >
          Prev
        </div>
        <div className="page-box">
          {pageNo} / {totalPages}
        </div>
        <div
          onClick={() => setPageNo((p) => Math.min(p + 1, totalPages))}
          className="page-box"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default AllSeries;
