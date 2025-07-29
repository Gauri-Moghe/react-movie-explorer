//list of all the movies, search bar for searching the movies and ability to fav a movie 

//user interface for the home page

import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState(""); //stores text typed into the search bar 
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); //because we will set it to false when data is no longer being loaded in the useEffect 

    //loading the popular movies for the first render and when home is clicked after searching 
    const loadPopularMovies = async () => {
        setLoading(true);
        try {
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
            setError(null);
        }

        catch (err) {
            console.log(err); //to help identifying the error
            setError("Cannot load the movies !!")
        }

        finally {
            setLoading(false);
        }
    }


    //
    useEffect(() => {
        loadPopularMovies()
    }, [])


    //listen for the custom reset event from NavBar to reset to popular movies
    useEffect(() => {
        const handleReset = () => {
            setSearchQuery(""); //Clears the search box
            loadPopularMovies(); //Reloads the initial popular movies
        };
        window.addEventListener("home-reset", handleReset);
        return () => window.removeEventListener("home-reset", handleReset); //tp stop listening after the component is unmounted
    }, []);

    //searching the movies
    const handleSearch = async (e) => {

        e.preventDefault(); //Stops the page from refreshing when the form is submitted

        if(!searchQuery.trim()) return //to avoid searching for just spaces on the search tab
        if(loading) return //not letting to search if we are already searching for something else 

        setLoading(true); //indicates on screen that the results are loading
        try{

            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults);
            setError(null); //clearing the previous errror incase there is another error after loading 

        }
        catch(err){

            console.log(err); 
            setError("Failed to search the movies !!")
        }
        finally{

            setLoading(false); //whether it failed or was successful we need to stop loading
        }

        setSearchQuery(""); //Clears the search box after starting a search

    }

    return (

        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search for movies"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} //updating the state from an input element

                />
                <button type="submit" className="search-button">Search</button>

            </form>

            {error && <div className="error-message">{error}</div>}


            {/* if loading the page, we will show loading div, otherwise show the movies grid */}

            {loading ? (<div className="loading">Loading...</div>) :

                (<div className="movies-grid">

                    {movies.map(
                        (movie) =>
                        (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                    )}

                </div>

                )}
        </div>
    );

}

export default Home;
