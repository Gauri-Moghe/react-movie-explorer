// import { createContext, useState, useContext, useEffect } from "react";

// //creating a context
// const MovieContext = createContext();

// export const useMovieContext = () => useContext(MovieContext)

// export const MovieProvider = ({ children }) => {

//     const [favorites, setFavorites] = useState([]);

//     useEffect(() => {
//         //look inside the local storage to see if it already has something in it
//         const storedFavs = localStorage.getItem("favorites") //use the key favorites to store into the local storage

//         //checking for any favorite movie stored 
//         if (storedFavs){
//             setFavorites(JSON.parse(storedFavs)) //store the info in a list which gets converted into a JSON string in the LS
//             console.log("Loaded favorites:", JSON.parse(storedFavs));
//         }
//     }, [])


//     //runs this code when the favorites state has changed -> pressing the heart
//     useEffect(() => {

//         localStorage.setItem('favorites', JSON.stringify(favorites));
//         console.log("Saved favorites:", favorites);

//     }, [favorites]) //any time the "favorites" state changed we update what we store in the LS

//     //adding a movie into favorites
//     const addToFavorites = (movie) => {

//         //This function safely updates the favorites state by taking the old list and adding a new movie at the end
//         setFavorites(prev => [...prev, movie])

//     }

//     //remove favorite movie 
//     const removeFromFavorites = (movieId) => {

//         setFavorites(prev => prev.filter(movie => movie.id !== movieId))

//     }

//     //checking if a movie is a favorite
//     const isFavorite = (movieId) => {

//         return favorites.some(movie => movie.id === movieId)

//     }

//     //values that are accesible as children within the context
//     const value = {

//         favorites,
//         addToFavorites,
//         removeFromFavorites,
//         isFavorite

//     }

//     return <MovieContext.Provider value={value}>

//         {children}

//     </MovieContext.Provider>

// } //will provide the state to any components wrapped around it

import { createContext, useState, useContext, useEffect, useRef } from "react";

//creating a context
const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);
    const isFirstRender = useRef(true); // track if it's the first render

    useEffect(() => {
        //look inside the local storage to see if it already has something in it
        const storedFavs = localStorage.getItem("favorites") //use the key favorites to store into the local storage

        //checking for any favorite movie stored 
        if (storedFavs){
            setFavorites(JSON.parse(storedFavs)) //store the info in a list which gets converted into a JSON string in the LS
            console.log("Loaded favorites:", JSON.parse(storedFavs));
        }
    }, [])


    //runs this code when the favorites state has changed -> pressing the heart
    useEffect(() => {
        // skip saving on the very first render to avoid overwriting LS
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        console.log("Saved favorites:", favorites);

    }, [favorites]) //any time the "favorites" state changed we update what we store in the LS

    //adding a movie into favorites
    const addToFavorites = (movie) => {

        //This function safely updates the favorites state by taking the old list and adding a new movie at the end
        setFavorites(prev => [...prev, movie])

    }

    //remove favorite movie 
    const removeFromFavorites = (movieId) => {

        setFavorites(prev => prev.filter(movie => movie.id !== movieId))

    }

    //checking if a movie is a favorite
    const isFavorite = (movieId) => {

        return favorites.some(movie => movie.id === movieId)

    }

    //values that are accesible as children within the context
    const value = {

        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite

    }

    return <MovieContext.Provider value={value}>

        {children}

    </MovieContext.Provider>

} //will provide the state to any components wrapped around it
