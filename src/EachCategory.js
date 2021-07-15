
import {Link} from 'react-router-dom'

const EachCategory = ({id,name}) => {
    const handleClick=(_id)=>{
        console.log('going to genres')
    }

    return ( <>
        <Link to={`/genre/${id}`}>
        <div onClick={()=>handleClick(id)} className='eachcategory'>
        {name}
        </div>
        </Link>
        </>
         );
}
 
export default EachCategory;