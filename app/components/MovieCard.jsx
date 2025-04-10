'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const MovieCard = ({movie}) => {
    const router=useRouter();
    const [isHovering,setIsHovering]=useState(false)
    const pixel=movie.artworkUrl100.replace('100x100','600x400')
  return (
    <div className='movie-card' 
    onMouseEnter={()=>setIsHovering(true)} 
    onMouseLeave={()=>setIsHovering(false)}
    onClick={()=>router.push(`/${movie.trackId}`)}
    >
        {isHovering && movie.previewUrl ? (
            <video 
                src={movie.previewUrl} 
                autoPlay
                loop 
                muted
                className='hover-preview'
            />
        ) : (
            <img src={pixel} alt={movie.trackName} className='movie-image' />
        )}
        <div className='details'>
            <h1>{movie.trackName}</h1>
            <p>{movie.primaryGenreName}</p>
        </div>
    </div>      
  )
}

export default MovieCard