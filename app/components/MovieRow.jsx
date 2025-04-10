import React from 'react'
import MovieCard from './MovieCard'
const MovieRow = ({title,movies}) => {
  return (
    <div  className='movie-row mb-10'>
        <h2>{title}</h2>
        <div className='flex flex-col md:flex-row  gap-4 overflow-x-auto scrollbar-hide px-2 sm:px-4'>
        {movies.map((movie,index)=>{
            return(
                <MovieCard key={index} movie={movie} />
            )
        })}
        </div>
    </div>
  )
}

export default MovieRow;