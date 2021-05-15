import './modal.css'
import db from './firebase'
import { useState,useEffect} from 'react'
import Movies from './Movies'

const WatchList = ({show,hide,children}) => {
    const showHideClassName=show? "modal display-block" : "modal display-none"

    const dbRef=db.collection('movies')
    const image_api= 'https://image.tmdb.org/t/p/w400/'
    
    const [posterArray,setPosterArray]=useState([])
    
  
    useEffect(()=>{
        dbRef.get().then((snapshot)=>{
            const p=[]
            snapshot.docs.forEach((doc)=>{
                const poster=doc.data().poster_path
                const link =image_api+poster
                p.push(link)
            })
            setPosterArray(p)
        })
    },[])

   
    
    //console.log('poster array aftet useeffect is', posterArray)

    return (  <div className={showHideClassName}>
        
        <section className="modal-main">
        <section ><button className="delete" onClick={hide}>X</button></section>
        <h3 style={{color:"white"}} align="center">Your Watchlist</h3>
      <div className='watchlist-movies'>
     
      
      {posterArray.map(e=><img className="watchlist-img" src={e} />)}
     </div>

        </section>
       
       </div>);

       
}
 
export default WatchList;