
import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}){

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id) //tells if the current movie has been favorited or not
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/noImage.jpg"; // Place placeholder.jpg inside public/ folder

    //when clicked ->check if favorite, then unfavorite it or vice versa
    function onFavoriteClick(e){

        e.preventDefault() //preventing the default behavior of the button
        if(favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie); 
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src = {posterUrl} alt = {movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            {/* <p>{movie.release_date}</p> */}

            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>

}

export default MovieCard