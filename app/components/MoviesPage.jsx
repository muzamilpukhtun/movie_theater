import React from 'react'
import MovieRow from './MovieRow'
export const MoviesPage = ({movies}) => {
  return (
    <div className='bg-black min-h-screen'>
      <main className='p-8'>
        {movies.map((movie,index)=>( 
          <MovieRow key={index} title={movie.title} movies={movie.movies}/>
        ))}                                                             
      </main>
    </div>
  )
}