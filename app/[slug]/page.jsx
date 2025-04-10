'use client'

import React, { useEffect, useState } from "react";
import Loader from "../Loader";
const page = ({params}) => {
    const [movie,setMovie]=useState(null)
    const {slug}=React.use(params);
    useEffect(() => {
        const fetchMovieDetails= async()=>{
            const response = await fetch(`https://itunes.apple.com/lookup?id=${slug}`)
            const data = await response.json();
            setMovie(data.results[0]);
            console.log(data);
        }
        fetchMovieDetails();
    }, [slug])
    if(!movie){
        return <div><Loader/></div>
    }
    const pixel=movie.artworkUrl100.replace('100x100','600x400')
  return (
    <div className="movie-detail-page">
        <div className="movie-detail-container">
            <video src={movie.previewUrl} controls autoPlay className="movie-video" style={{border:'1px solid blue'}}/>
            <div className="movie-info">
                <h1>{movie.trackName}</h1>
                <strong>Genre:</strong>
                {movie.primaryGenreName}
                <strong>Release Date :</strong>{movie.releaseDate}
            <strong>Track Price :</strong>{movie.trackPrice}
            <strong>Description :</strong>{movie.longDescription}
            </div>
            <button className="back-button" onClick={()=>window.history.back()}>Back to Home</button>
        </div>
    </div>
  )
}

export default page