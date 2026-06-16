import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import AllMoviesCard from '../components/AllMoviesCard'

const SearchResults = ()=>{
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const q = params.get('q') || ''
  const [page, setPage] = useState(1)
  const [results, setResults] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  useEffect(()=>{
    if (!q) return
    const key = "918790a038aea2ed15515872e62a5cb4"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${encodeURIComponent(q)}&page=${page}`
    fetch(url)
      .then(r=>r.json())
      .then(res=>{
        setResults(Array.isArray(res.results) ? res.results : [])
        setTotalPages(res.total_pages || 1)
      })
      .catch(err=>{
        console.error(err)
        setResults([])
      })
  }, [q, page])

  return (
    <div className='contain'>
      <div className='spacer'></div>
      <h2>Showing search results for "{q}"</h2>
      <div className='spacer'></div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {results.map(item=> (
          <AllMoviesCard key={item.id} id={item.id} title={item.title || item.original_title} poster={item.poster_path} date={item.release_date} />
        ))}
      </div>

      <div className="movies-pagination mt-6">
        <div onClick={()=>setPage(p=>Math.max(p-1,1))} className='page-box'>Prev</div>
        <div className='page-box'>{page} / {totalPages}</div>
        <div onClick={()=>setPage(p=>Math.min(p+1,totalPages))} className='page-box'>Next</div>
      </div>
    </div>
  )
}

export default SearchResults
