import React, { useEffect, useState } from 'react';
import { MdVideoLibrary } from "react-icons/md";

const Categories = () => {
    const [catItems, setCatItems] = useState([]);
    useEffect(()=>{
      const key = "918790a038aea2ed15515872e62a5cb4"
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`)
      .then(res=>res.json())
      .then(data=>setCatItems(Array.isArray(data?.genres) ? data.genres : []))
    }, [])
  return (
    <section id="categories" className="contain">
      <div className="flex flex-col lg:flex-row gap-x-12 justify-between">
        <h2 className="text-2xl lg:text-6xl font-ubuntu font-bold text-white">
          Browse movie genres
        </h2>
        <p className="subtitle">
          Browse popular movie categories powered by The Movie Database (TMDB). Click a category to view related titles.
        </p>
      </div>

      <div className="space"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {catItems.map((cat) => (
          <div key={cat.id} className="cat-gridbox flex items-start flex-col xl:flex-row xl:items-center">
            <div className="bg-[#22262F] text-[#DF3A3A] rounded-xl text-2xl">
              <MdVideoLibrary />
            </div>
            <div className="cat-gridbox-info">
              <h5>{cat.name} </h5>
              <p>View movies in the {cat.name} category</p>
              <a href={`/movies?genre=${cat.id}`} className="cat-gridbox-link">
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories