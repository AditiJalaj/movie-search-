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
        console.log(` pposter_array  is ${posterArray} `)
        setPosterArray([...posterArray])
        
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
        <section  > {posterArray && posterArray.map((p)=>{
            <img src={p} alt="alt text"></img>
        })} </section>
        
        </section>
       
       </div>);

       //retrieve movies from firestore
}
 
export default WatchList;