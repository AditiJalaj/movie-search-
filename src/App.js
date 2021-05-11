import './App.css';

const App=()=>{

const feature_api="https://api.themoviedb.org/3/discover/movie?sortby=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

let movies
 async function fetchMovies(){
   const response=await fetch(feature_api)
   //waits until movies is fetched

    movies=await response.json()
    console.log('inside the fetchMovies'+movies)
   //movies is an object
   return movies.results
 }
 
  const moviesss= fetchMovies()
  console.log('outside the fetch function moviesss' + moviesss + 'type of moviesss ' + typeof(moviesss))

  return(
    <div>
   <p></p>
   </div>
  )
}
export default App;
