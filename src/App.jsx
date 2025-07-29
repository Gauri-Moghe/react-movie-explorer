import './css/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

function App() {

  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          {/* <Route path='/' element = {<Home />}/>  
          <Route path='/favorites' element = {<Favorites />}/>   */}

          <Route path="/" element={<Home key="home" />} />  
          <Route path="/favorites" element={<Favorites />} />  

        
        </Routes>
      </main>
    </MovieProvider>
  );
}


export default App
