import {useState } from 'react'

const image_api= 'https://image.tmdb.org/t/p/w400/'
const search_api='https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query='
const Movies = ({title,vote_average,overview,poster_path}) => {

    const [search ,setSearch]=useState('')
    const handleSearch=(e)=>{
      e.preventDefault()
      setSearch(e.target.value)
      fetch(search_api+e.target.value)
      .then((res)=>res.json())
      .then((data)=>console.log(data))
    }

    return ( 
         <div> 
         <div className='movie-container'>
         <img className="movie-img" src={image_api+poster_path} alt="poster"/>
         <p>{title}</p>
         <span>{vote_average}</span>
         <p className="overview">{overview}</p>
         </div>
        </div>);
}
 
export default Movies;