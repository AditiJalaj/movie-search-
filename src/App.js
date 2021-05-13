import './App.css';
import {useState,useEffect} from 'react'
import Movies from './Movies'
import WatchList from './WatchList'
import {BrowserRouter, Switch, Link ,Route } from 'react-router-dom'


const App=()=>{
const feature_api="https://api.themoviedb.org/3/discover/movie?sortby=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const search_api='https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query='

const [movies,setMovies]=useState('')
const [search,setSearch]=useState('')

useEffect(()=>{
  fetch(feature_api)
  .then((res)=>{return res.json()})
  .then((data)=>{
    setMovies(data.results)
  })

},[search])
 
//console.log('movies after return',movies)

const handleSearch=(e)=>{
 setTimeout(() => {
   //console.log('this fires after 1.5seconds')
  setSearch(e.target.value)
  search && fetch(search_api+search)
  .then((res)=>res.json())
  .then((data)=>{setMovies(data.results)}) 
 }, 1500);

 setSearch('')
 
}


  return(
    <div>
    <h1>Movie search </h1>
    <BrowserRouter><Route component={WatchList}><p style={{color:"white"}}>Watch</p></Route></BrowserRouter>
    <input type="search" onChange={handleSearch} placeholder="search.."></input>

    {movies && movies.map((movie)=>{
     return <Movies key={movie.id} {...movie}/>
   })}
   </div>
  )
}
export default App;
