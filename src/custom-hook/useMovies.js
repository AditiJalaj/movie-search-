
import db from '../firebase'
import { useState,useEffect} from 'react'

const useMovies = () => {

    const image_api= 'https://image.tmdb.org/t/p/w400/'
    const dbRef=db.collection('movies')
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
    },[posterArray])

    return posterArray ;
}
 
export default useMovies;