import './modal.css'
import db from './firebase'
import { useState,useEffect} from 'react'
import useMovies from './useMovies'

const WatchList = ({show,hide,children}) => {
    const showHideClassName=show? "modal display-block" : "modal display-none"

    const dbRef=db.collection('movies')
    const image_api= 'https://image.tmdb.org/t/p/w400/'
    
   // const [posterArray,setPosterArray]=useState([])
    
   //on watch list comp mount get watchlisted movies
  const posterArray=useMovies()

    //Refactored into useMovies custom hook
    // useEffect(()=>{
    //     dbRef.get().then((snapshot)=>{
    //         const p=[]
    //         snapshot.docs.forEach((doc)=>{
    //             const poster=doc.data().poster_path
    //             const link =image_api+poster
    //             p.push(link)
    //         })
    //         setPosterArray(p)
    //     })
    // },[])

   
    const deleteFromWatchList=()=>{
         db.collection('movies').doc().delete()
        .then(()=>{
           console.log('deleting e')
        })
    }
    //console.log('poster array aftet useeffect is', posterArray)

   
   
    return ( 
         <div className={showHideClassName}>
        
        <section className="modal-main">
        <section ><button className="delete" onClick={hide}>X</button></section>
        <h3 align="center">Your Watchlist</h3>
      <div className='watchlist-movies'>
     
      
      {posterArray.map((e)=>{
         return ( <div key={e}>
            <button 
            onClick={deleteFromWatchList}
             className="delete-movie">X</button>
          <img className="watchlist-img" src={e} />
          </div>
          )
    })}
     </div>

        </section>
       
       </div>);

       
}
 
export default WatchList;