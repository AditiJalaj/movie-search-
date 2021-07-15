import {useState,useEffect} from 'react'
import EachCategory from './EachCategory'

const Category = () => {
    const [genres,setGenres]=useState()
    const genres_api="https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1&language=en-US"
    
    useEffect(()=>{
        fetch(genres_api)
        .then((res)=>{return res.json()})
        .then((data)=>{
          setGenres(data.genres)
          console.log(data.genres)
        })
        return ()=>{}
    },[])

    return ( <>
       <h1 style={{textAlign:"center"}}>SELECT CATEGORY</h1>

       <div style={{display:'flex',justifyContent:"flex-start",flexWrap:"wrap",margin:'3px'}}>
       {genres!==undefined && genres.map((i)=>{
           return <EachCategory key={i.id} id={i.id} name={i.name}/>
       })}
       </div>
        </> );
}
 
export default Category;