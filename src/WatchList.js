import './modal.css'
import db from './firebase'
import {useRef, useState} from 'react'
import Movies from './Movies'

const WatchList = ({show,hide,children}) => {
    const showHideClassName=show? "modal display-block" : "modal display-none"

    const dbRef=db.collection('movies')
    const image_api= 'https://image.tmdb.org/t/p/w400/'
    const titleRef=useRef()
    
    const [posterArray,setPosterArray]=useState([])
    
    const renderWatchListToModal=(d)=>{

        const poster=d.data().poster_path
        const link =image_api+poster
        //console.log(image_api+poster)
        posterArray.push(link)


        //setting the array to store all poster links
        setPosterArray([...posterArray])
        console.log(` poster_array after set Poster is ${posterArray} `)
    }

    console.log('poster array after everythin',posterArray)

    dbRef.get().then((snapshot)=>{
        snapshot.docs.forEach((doc)=>{
            renderWatchListToModal(doc)
        })
    })

    return (  <div className={showHideClassName}>
        
        <section className="modal-main">
        <section ><button onClick={hide}>X</button></section>

        <section ref={titleRef} >  f  </section>

        {/* wanna display all the poster links below on modal*/}
        <section> {posterArray.map((p)=>{
           return <img src={p}/> }
        )} </section>
        
        </section>
       
       </div>);

       //retrieve movies from firestore
}
 
export default WatchList;