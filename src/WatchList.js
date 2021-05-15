import './modal.css'
import db from './firebase'
import {useRef, useState,useEffect} from 'react'
import Movies from './Movies'

const WatchList = ({show,hide,children}) => {
    const showHideClassName=show? "modal display-block" : "modal display-none"

    const dbRef=db.collection('movies')
    const image_api= 'https://image.tmdb.org/t/p/w400/'
    const titleRef=useRef()
    const imgRef=useRef()

    const [posterArray,setPosterArray]=useState([])
    
   {/* const renderWatchListToModal=(d)=>{
        const poster=d.data().poster_path
        const link =image_api+poster
        //console.log(image_api+poster)
        posterArray.push(link)
        //setting the array to store all poster links
        //console.log(` poster_array after set Poster is ${posterArray} `)
    }   */}

    //setPosterArray(posterArray)
    //console.log('poster array after everythin',posterArray)

   {/* dbRef.get().then((snapshot)=>{
        snapshot.docs.forEach((doc)=>{
            renderWatchListToModal(doc)
        })
    })   */}
  
    useEffect(()=>{
        dbRef.get().then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                const poster=doc.data().poster_path
                const link =image_api+poster
                posterArray.push(link)
            })
        })
    },[])

    
    console.log('poster array aftet useeffect is', posterArray)

    return (  <div className={showHideClassName}>
        
        <section className="modal-main">
        <section ><button onClick={hide}>X</button></section>

        <section ref={titleRef} >  f  </section>

        {/* wanna display all the poster links below on modal*/}
        <section> <img ref={imgRef} src={posterArray && posterArray.map((p)=>{
            return p
        })}></img></section>
        
        </section>
       
       </div>);

       
}
 
export default WatchList;