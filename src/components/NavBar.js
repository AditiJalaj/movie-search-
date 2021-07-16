
import WatchList from './WatchList'
import { Link } from 'react-router-dom'
import {useState} from 'react'

const NavBar = () => {

    const [showModal,setShowModal]=useState(false)
    const show=()=>{
        setShowModal(true)
      }
      const hide=()=>{
        setShowModal(false)
      }

    return ( 
        <nav>
        <div className='movie-header'>
        <h1>Movie-Max</h1>
        
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/category'>Category</Link>
    
        <WatchList show={showModal} hide={hide} /> 
        <button className="show-w" onClick={show}>SHOW WATCHLIST</button>
        </div>
        </nav>
     );
}
 
export default NavBar;