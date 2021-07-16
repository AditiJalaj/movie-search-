import {useState,useEffect} from 'react'
import Movies from './Movies'
import {useParams} from 'react-router-dom';

const Home = () => {

const [movies,setMovies]=useState('')
const [search,setSearch]=useState('')
const [trending,setTrending]=useState(true)
const [txt,setTxt]=useState('')
const {id}=useParams()
console.log('genre id',id) //genreid ,if home clicked then this will be undefined

const feature_api="https://api.themoviedb.org/3/discover/movie?sortby=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const search_api='https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query='

const genrewise_api=`https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`

useEffect(()=>{

  fetch(id!==undefined?genrewise_api:feature_api)
  .then((res)=>{return res.json()})
  .then((data)=>{
    setMovies(data.results)
  })
  .then(()=>{
    setTxt('TRENDING MOVIES')
  })

 // for async requests cleanup
  return ()=>{}

},[trending,id,genrewise_api])


//IMPLEMENT DEBOUNCE FOR SEARCH
function handleSearch(e){
    setSearch(()=>e.target.value)
    e.preventDefault()
    search && fetch(search_api+search)
  .then((res)=>res.json())
  .then((data)=>{setMovies((pv)=>pv=data.results)}) 
  if(e.target.value==='' ||e.target.value===undefined ){
    setTrending(!trending)
  }
  if(movies===undefined){
    setTxt('')
  }
}



  return(
      <>
    <div>
    <form>
    <input
    className="search-bar" 
    type="search"
    onChange={handleSearch} 
    placeholder="Search Movie...">
   </input>
   </form>
   </div>

    <div>
    <div>
    {id===undefined? <h3 className="trending">{txt} </h3> : <h3 style={{color:"black"}}>.</h3>}
    </div>
    <div className="movie-container">
    {movies && movies.map((movie)=>{
     return <Movies key={movie.id} {...movie}/>
     })}
   </div>
   </div>
   </>
  )
}
 
export default Home;