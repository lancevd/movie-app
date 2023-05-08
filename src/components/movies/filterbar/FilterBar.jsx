import React from 'react'

const FilterBar = () => {
  return (
    <div id='filter-bar' className='contain'>
        <div id="show-number">
            <label htmlFor="">Show: </label>
            <select name="" id="">
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="20">20</option>
            </select>
        </div>

        <div id="sort-by">
            <label htmlFor="">Sort By: </label>
            <select name="" id="">
                <option value="Latest">Latest</option>
                <option value="Trending">Trending</option>
                <option value="Most watched">Most Watched</option>
            </select>
        </div>
    </div>
  )
}

export default FilterBar