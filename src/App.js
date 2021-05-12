import './App.css';
import {useState,useEffect} from 'react'
import Movies from './Movies'

const App=()=>{
  const [movies,setMovies]=useState(null)
  let [search,setSearch]=useState('')

const feature_api="https://api.themoviedb.org/3/discover/movie?sortby=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const search_api='https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query='

useEffect(()=>{
  fetch(feature_api)
  .then((res)=>{return res.json()})
  .then((data)=>{
    return setMovies(data.results)
  })
},[])
 
//console.log('movies after return',movies)

const handleChange=(e)=>{
 setTimeout(() => {
   //console.log('this fires after 1.5seconds')
   search=e.target.value
   fetch(search_api+search)
   .then((res)=>res.json())
   .then((data)=>{return setMovies(data.results)})
   .then(setSearch(''))

 }, 1500);
 

 //where to setSearch('')???
}
  return(
    <div>
    <h1>Movie search </h1>
    <input type="search" onChange={handleChange} placeholder="search.."></input>

    {movies && movies.map((movie)=>{
     return <Movies key={movie.id} {...movie}/>
   })}
   </div>
  )
}
export default App;
