import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import sample from '../images/sample.png'
import loading from '../images/loading.png'
import imdb from '../images/imdb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Info = () => {
    const [data,setData]=useState('')
    const {id}=useParams()
   
    const image_api= 'https://image.tmdb.org/t/p/w400/'
    const details_api=`https://api.themoviedb.org/3/movie/${id}?api_key=9f27855f3a716c4b2b32bb4cf259ed66&language=en-US`
    const imdb_link='http://www.imdb.com/title/'
      
    //imdb link http://www.imdb.com/title/data.imdb_id/
    useEffect(()=>{
        fetch(details_api)
        .then((res)=>{
            return res.json()})
            .then((data)=>{
                setData(data)
                //object
            })
    },[details_api])
 
    return ( <>
    <div>
    <section>
    <img className="backdrop"  alt="backdrop"
    src={data.backdrop_path ? image_api+data.backdrop_path: sample}
    />
    <h1 className="title">{data.original_title}</h1>
    </section>
    
    <section className="flex">
    <img className="poster-path" src={data.poster_path ? image_api+data.poster_path:loading}/>
    <div className='genrediv'>
    {
    data!==undefined && data.genres!==null && data.genres!==undefined && data.genres.map((i)=>
    {return <h1 className='genre'>{i.name}</h1>})
    }
    </div>
    </section>

    <section className='details'>
    <div>
    <h1>{data.tagline}</h1>
    <span className="overview">{data.overview}</span>

    {
        data.vote_average && 
        <header>
     <h1
    style={{display:"inline-block",borderRadius:"50px"}}>Rating</h1>
    <span className='tab'>{data.vote_average}/10</span>
    </header>

    }
    
   
    { data.release_date &&  
        <> <h1 style={{display:"inline-block"}}>Released</h1>
    <span className='tab'>{data.release_date}</span>  </>}
   
    </div>

    {data.homepage && 
    <header>
    <h1 style={{display:"inline-block"}}>Watch Trailer</h1>
    <span className='watch'><a href={data.homepage} 
    rel="noreferrer"
    target="_blank"><FontAwesomeIcon icon={faPlay}/></a></span>
    </header>
    }

    {
        data.imdb_id && 
        <header>
    <h1 style={{display:"inline-block"}}>More on...</h1>
    <span><a href={imdb_link+data.imdb_id} rel="noreferrer" target="_blank"><img className='imdb' src={imdb} alt="imdb"/></a></span>
    </header>
    }
    
    </section>

    {/*similart movies */}

   
    </div> 
     </> );
}
 
export default Info;