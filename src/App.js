import './App.css';

const App=()=>{

const feature_api="https://api.themoviedb.org/3/discover/movie?sortby=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

  const movies=fetch(feature_api)
  .then((res)=>res.json())
  .then((data)=>console.log(data.results))

  return(
    <div>
    {movies.map((movie)=>{
      <p>{movie}</p>
    })}
    </div>
  )
}
export default App;
