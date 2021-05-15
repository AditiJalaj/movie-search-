import './modal.css'
import db from './firebase'
import {useRef, useState,useEffect} from 'react'
import Movies from './Movies'

const WatchList = ({show,hide,children}) => {
    const showHideClassName=show? "modal display-block" : "modal display-none"

    const dbRef=db.collection('movies')
    const image_api= 'https://image.tmdb.org/t/p/w400/'
    //const titleRef=useRef()
     
    const imgRef=useRef()

    const [posterArray,setPosterArray]=useState([])
    
  
    useEffect(()=>{
        dbRef.get().then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                const poster=doc.data().poster_path
                const link =image_api+poster
                posterArray.push(link)
            })
        })
    },[posterArray])

    
    console.log('poster array aftet useeffect is', posterArray)

    return (  <div className={showHideClassName}>
        
        <section className="modal-main">
        <section ><button className="delete" onClick={hide}>X</button></section>
        <p style={{color:"white"}} align="center">YOUR wathlost</p>
      <div className='watchlist-movies' >
     
       {posterArray.map(e=><img src={e} />)}
      <img className="watchlist-img"
      ref={imgRef}
      src={
        posterArray &&
        posterArray.map((p) => {
          return p;
        })
      }
    ></img>
     </div>
    

        </section>
       
       </div>);

       
}
 
export default WatchList;