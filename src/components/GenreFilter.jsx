
import React from 'react'

const GenreFilter = ({genreList, setSelectedGenre}) => {
  return (
    <div>
      <select name="" id="" className='p-2 mb-4 bg-gray-700/50 backdrop-blur-md text-white border rounded ' onChange={(e) => 
        setSelectedGenre(e.target.value)
      }>
        <option>All Genres</option>
        {
          genreList.map( genre =>{
            return (
              <option key={genre} value={genre.id}>{genre.name}</option>
            );
          })
        }
      </select>
    </div>
  )
}

export default GenreFilter
