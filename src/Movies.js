import {useRef} from 'react'
import db from './firebase'

const image_api= 'https://image.tmdb.org/t/p/w400/'
//const search_api='https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query='

const Movies = ({id,title,vote_average,overview,poster_path}) => {

    const dummyRef=useRef()
    const dbRef=db.collection('movies')

    const handleWatchlist=()=>{
        dummyRef.current.disabled=true
        dummyRef.current.style.backgroundColor='#151d15'
        
        
         //adding data to firestore is async
        dbRef.add({title,poster_path,createdAt:new Date()
        }).then(()=>{
            alert("added")
            
        }).catch((err)=>{
            alert(`error ${err}`)
        })
        
    }

    return ( 
         
         <div className='movie'>
         <img src={image_api+poster_path} alt={title}/>
         <button ref={dummyRef} className="w-button" onClick={handleWatchlist}>Add To WatchList</button>
         <div className="movie-info">
         <h3 >{title}</h3>
         <span>{vote_average}</span>
         </div>
         <div className="movie-over">
          <h2>Overview</h2>
          <p>{overview}</p>
             </div>
         </div>
         
        );
}
 
export default Movies;