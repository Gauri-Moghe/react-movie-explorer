# Movie Explorer 

A React based responsive web application to explore movies using the TMDB API. Search for titles, view detailed movie information, and save your favorites movies!

## Project Overview

React Movie Explorer is a movie browsing app that displays popular movies, allows users to search for specific titles, and provides a detailed view for each movie.

Users can favorite movies, and the list of favorites persists across sessions using the browser’s localStorage.

No backend or database is required. The entire app runs on the frontend using React and the TMDB API.

## Features

* Browse trending and popular movies on the home page
* Search for movies by title using live API queries
* View detailed movie pages with poster, release date, rating, runtime, and overview
* Add or remove movies from favorites with persistent storage via localStorage
* Light/Dark mode friendly responsive UI

## Folder Structure
```
React-Movie-Explorer/
├── public/                
├── src/                   
│   ├── components/        
│   ├── pages/             
│   ├── contexts/          
│   ├── css/               
│   ├── App.jsx            
│   ├── api.js             
│   └── main.jsx          
├── package.json
├── vite.config.js
└── .env                  
```

## Demo

*(Optional: Add Netlify/Vercel/GitHub Pages link here if you deploy)*


## Technologies Used

- **React (Vite)**
- **React Router**
- **TMDB API**
- **CSS Modules**
- **LocalStorage API**

## Setup & Installation

Clone the repository:
```bash
git clone https://github.com/Gauri-Moghe/react-movie-explorer.git
cd react-movie-explorer
npm install
```

Start the development server:
```bash
npm run dev
```

## License

This project uses the TMDB API but is not endorsed or certified by TMDB.

## Author

**Gauri Shashank Moghe**  
🔗 [LinkedIn](https://www.linkedin.com/in/gauri-moghe) 

