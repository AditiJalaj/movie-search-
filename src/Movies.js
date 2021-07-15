import {useRef,useState} from 'react'
import db from './firebase'
import useMovies from './useMovies'
import {Link } from 'react-router-dom'

const image_api= 'https://image.tmdb.org/t/p/w400/'

const Movies = ({id,title,vote_average,overview,poster_path}) => {

    const [inwatchlist, setinWatchlist]=useState(false)
  
    const dummyRef=useRef()
    const dbRef=db.collection('movies')

    //custom hook get all poster path array in collection on mount 
    const posterArray=useMovies()
    
    const handleWatchlist=()=>{

        dummyRef.current.disabled=true
        dummyRef.current.style.backgroundColor='#151d15'
        
        //console.log('inside watchlist ', poster_path)  
       
        //check if already poster path - arrays includes this poster path and return
        if(posterArray.includes(image_api+poster_path))
        {
            return alert("Movie already present in watchlist!")
        }
       
         //else adding data to firestore is async
         else if(!posterArray.includes(image_api+poster_path)){
             dbRef.add({id,title,poster_path,createdAt:new Date()}).then(()=>{
            alert("added")
            setinWatchlist(true)
         }).catch((err)=>{
            alert(`error ${err}`)
         })
        }
        
    }

    return ( 
         
         <div className='movie'>
         <img src={image_api+poster_path} alt={title}/>
         <button ref={dummyRef} className="w-button" onClick={handleWatchlist}>Add To WatchList</button>
        
         <div className="movie-info">
         <h3 >{title}</h3>
         <span>{vote_average}</span>
         </div>

         <Link className="knowmore" to={`/item/${id}`}>Know More</Link>
        
         <div className="movie-over">
          <h2>Overview</h2>
          <p>{overview}</p>
             </div>
         </div>
         
        );
}
 
export default Movies;