// //display the favorite movies being selected

// import "../css/Favorites.css"
// import { useMovieContext } from "../contexts/MovieContext"
// import MovieCard from "../components/MovieCard"

// function Favorites() {

//     const {favorites} = useMovieContext(); 

//     if(favorites) {
//         return (
//             <div className="favorites">
//                 <h2>Your Favorite Movies</h2>
//             <div className="movies-grid">
//                 {favorites.map((movie) => (
//                     <MovieCard movie={movie} key={movie.id} />
//                 ))}
//             </div>
//             </div>
//         );
//     }

//     return <div className="favorites-empty">
//         <h2>No Favorite Movies Yet</h2>
//         <p>Your favorite movies will appear here if you heart them!</p>
//     </div>

// }

// export default Favorites

import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";

function Favorites() {
    const context = useMovieContext();
    if (!context) return null; //prevents crash if context is missing

    const { favorites } = context;

    return (
        <div className="favorites">
            <h2>Your Favorite Movies</h2>

            {/* in js an empty array ([]) is always truthy and that's why even when there were no favorites, the fav movies shows. The empty-state message finally renders when no movies are favorited when checking for favorites.length > 0 */}

            {favorites.length > 0 ? (
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="favorites-empty">
                    <h2>No Favorite Movies Yet</h2>
                    <p>Your favorite movies will appear here if you heart them!</p>
                </div>
            )}
        </div>
    );
}

export default Favorites;