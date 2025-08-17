import React, { useEffect, useState } from 'react'
import MovieCard from '../components/Moviecard'


const Home = () => {
  const [movies, setMovies] = useState([]);
  const[page, setPage] = useState(1);
  const[search, setSearch] = useState("");

  useEffect(()=>{
    let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=ec30ad2855fd50a07e048db8cb9b7be3`


    if(search){
      url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=ec30ad2855fd50a07e048db8cb9b7be3`
    }

    fetch(url).then((response)=>response.json()).then((data)=>setMovies(data.results));
  },[page,search])
  return (
    <div className='p-4 pt-16 mt-6'>
      <input type="text" placeholder='Search movies...' className='border p-2 w-3/4 md:w-1/2 rounded border-gray-700 bg-gray-900/50 backdrop-blur-md text-white fixed top-17 left-1/2 transform -translate-x-1/2 z-20' onChange={(e)=>setSearch(e.target.value)}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24'>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />         
        ))}        
      </div>
      <div className='pagination-container flex justify-between items-center mt-5'>
        <button 
        disabled={page==1}
        className='p-2 bg-gray-700 text-white rounded' onClick={
          ()=>{
            setPage((prev) => prev-1);
          }
        }>PREV</button>
        <p className=' font-bold'>Page No:{page}</p>
        <button className='p-2 bg-gray-700 text-white rounded'onClick={
          ()=>{
            setPage((prev) => prev+1);
          }
        }>NEXT</button>
      </div>
    </div>
  )
}

export default Home