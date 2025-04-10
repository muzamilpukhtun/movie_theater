import React from 'react'
import { MoviesPage } from './MoviesPage'
import Loader from '../loader'

const fetchMovies = async (query) => {
    const api = await fetch(`https://itunes.apple.com/search?term=${query}&media=movie`)
    const data = await api.json()
    // console.log('Fetching Movies =', data)
    return data.results;
}

const Movies = async () => {
    const actionMovies = await fetchMovies('marvel')
    const dcMovies = await fetchMovies('dc')
    const modernMovies = await fetchMovies('2023')
    const comedyMovies = await fetchMovies('comedy')
    const dramaMovies = await fetchMovies('drama')

    const movies=[
        {title:'Action Thrillers',movies:actionMovies},
        {title:'DC',movies:dcMovies},
        {title:'Modern Movies',movies:modernMovies},
        {title:'Comedy Hits',movies:comedyMovies},
        {title:'Drama Stories',movies:dramaMovies},
    ]

    //loader
    if(movies.length===0){
        return <div><Loader/></div>
    }


    return (
        <div>

        <header>
            <h1 style={{padding:'10px'}}>Movie Theater</h1>
        </header>
       <MoviesPage movies={movies}/>   
        </div>
    )
}

export default Movies
