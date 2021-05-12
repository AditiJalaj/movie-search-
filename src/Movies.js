import {useState,useRef } from 'react'

const image_api= 'https://image.tmdb.org/t/p/w400/'
//const search_api='https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query='

const Movies = ({id,title,vote_average,overview,poster_path}) => {

    const dummyRef=useRef()

    const handleWatchlist=()=>{
        alert('added to watchlist')
        dummyRef.current.disabled=true
        localStorage.setItem(id,title)
        console.log(localStorage)
        //how to render that to screen?
    }

    return ( 
         <div> 
         <div className='movie-container'>
         <img className="movie-img" src={image_api+poster_path} alt="poster"/>
         <button ref={dummyRef} onClick={handleWatchlist}>Add to watchlist</button>
         <p>{title}</p>
         <span>{vote_average}</span>
         <p className="overview">{overview}</p>
         </div>
        </div>);
}
 
export default Movies;