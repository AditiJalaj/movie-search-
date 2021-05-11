const image_api= 'https://image.tmdb.org/t/p/w400/'

const Movies = ({title,vote_average,overview,poster_path}) => {
    return ( 
         <div> 
         <h1>MOVIE SEARCH</h1>
         <img src={image_api+poster_path} alt="poster"/>
         <p>{title}</p>
         <span>{vote_average}</span>
         <p>{overview}</p>
        </div>);
}
 
export default Movies;