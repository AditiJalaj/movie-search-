import './App.css';
import {useState,useEffect} from 'react'
import Movies from './Movies'

const App=()=>{
  const [movies,setMovies]=useState(null)

const feature_api="https://api.themoviedb.org/3/discover/movie?sortby=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

useEffect(()=>{
  fetch(feature_api)
  .then((res)=>{return res.json()})
  .then((data)=>{
    return setMovies(data.results)
  })
},[])
 
//console.log('movies after return',movies)

  return(
    <div>
   
   {movies && movies.map((movie)=>{
     return <Movies key={movie.id} {...movie}/>
   })}
   </div>
  )
}
export default App;
