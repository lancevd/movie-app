import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FilterBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  function setFilter(f) {
    params.set("filter", f);
    params.set("page", "1");
    navigate({ pathname: "/movies", search: params.toString() });
  }

  return (
    <div id="filter-bar" className="contain flex items-center gap-6">
      <div>
        <label className="mr-2">Show:</label>
        <select
          defaultValue={params.get("show") || "12"}
          onChange={(e) => {
            params.set("show", e.target.value);
            navigate({ pathname: "/movies", search: params.toString() });
          }}
        >
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="20">20</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button onClick={() => setFilter("popular")} className="page-box">
          Popular
        </button>
        <button onClick={() => setFilter("top_rated")} className="page-box">
          Top Rated
        </button>
        <button onClick={() => setFilter("upcoming")} className="page-box">
          Upcoming
        </button>
        <button onClick={() => setFilter("trending")} className="page-box">
          Trending
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
