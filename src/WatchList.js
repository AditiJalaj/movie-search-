import './modal.css'
import db from './firebase'
import { useState,useEffect} from 'react'
import useMovies from './useMovies'

const WatchList = ({show,hide}) => {
    
   //to switch the modal class 
   const showHideClassName=show ? "modal" : "no-modal"
  
   //on watch list comp mount, get watchlisted movies poster links
  const posterArray=useMovies()

   //incomplete
    const deleteFromWatchList=()=>{
         db.collection('movies').doc().delete()
        .then(()=>{
           console.log('deleting e')
        })
    }
    //console.log('poster array aftet useeffect is', posterArray) -- https://

   
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