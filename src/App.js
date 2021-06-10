import './App.css';
import {useState,useEffect} from 'react'
import Movies from './Movies'
import WatchList from './WatchList'


const App=()=>{
const feature_api="https://api.themoviedb.org/3/discover/movie?sortby=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const search_api='https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query='

const [movies,setMovies]=useState('')
const [search,setSearch]=useState('')
const [showModal,setShowModal]=useState(false)
const [trending,setTrending]=useState(true)

const show=()=>{
  setShowModal(true)
}
const hide=()=>{
  setShowModal(false)
}

useEffect(()=>{
  fetch(feature_api)
  .then((res)=>{return res.json()})
  .then((data)=>{
    setMovies(data.results)
  })
},[trending])
 
//console.log('movies after return',movies)

const handleSearch=(e)=>{
  e.preventDefault()
  setSearch(e.target.value)
  search && fetch(search_api+search)
  .then((res)=>res.json())
  .then((data)=>{setMovies(data.results)}) 
 
  if(e.target.value==='' ||e.target.value===undefined ){
    setTrending(!trending)
  }
}


// const handleSubmit=(e)=>{
//   e.preventDefault()
//   setSearch(e.target.value)
//   search && fetch(search_api+search)
//   .then((res)=>res.json())
//   .then((data)=>{setMovies(data.results)}) 
//   .then((setSearch('')))
// }

  return(
    <div>
    <div className='movie-header'>
    <h1>Movie-Max </h1>
    
    <input className="search-bar" type="search"
     onChange={handleSearch} 
     placeholder="search..">
    </input>
    
    
    
    {/* <BrowserRouter>
    <Link to ="/watchlist">WatchList</Link>
     <Route path="/watchlist" component={WatchList} /> 
    </BrowserRouter>    */}

    <WatchList show={showModal} hide={hide}> <p>watchlist</p></WatchList>
    <button className="w-button" onClick={show}>SHOW WATCHLIST</button>
    </div>
    <br></br>
    <br></br>
    

    <h3 style={{color:"white"}}> Trending movies</h3>
    <div className="movie-container">
    {movies && movies.map((movie)=>{
     return <Movies key={movie.id} {...movie}/>
     })}
   </div>
   </div>
  )
}
export default App;
