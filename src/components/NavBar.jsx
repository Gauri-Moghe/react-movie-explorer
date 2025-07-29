// import { Link } from "react-router-dom";
// import "../css/Navbar.css"

// function NavBar(){
//     return <nav className="navbar">
//         <div className="navbar-brand"> 
//             <Link to= "/">Movie App</Link>
//         </div>
//         <div className="navbar-links">
//             <Link to= "/" className="nav-link">Home</Link>
//             <Link to= "/favorites" className="nav-link">Favorites</Link>
//         </div>
//     </nav>
// }

// export default NavBar

import { useNavigate, useLocation } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
    const navigate = useNavigate(); //hook to help navigate between routes programmatically 
    const location = useLocation(); //hook that tells us the current route path like / or /favorite

    //function that checks when on "/" route if clicked the home or movie app resets the screen to show the popular list again
    const goHome = () => {
        if (location.pathname === "/") {
            //already on Home, so send a reset signal instead of navigating
            navigate("/", { replace: true });
            window.dispatchEvent(new Event("home-reset"));  // custom event that sends a broadcast signal to the entire application, home.jsx listens to this and re renders the screen accordingly 
        } else {
            navigate("/"); //on a different page so can navigate normally
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand" onClick={goHome} style={{ cursor: "pointer" }}>
                Movie Explorer
            </div>
            <div className="navbar-links">
                <span className="nav-link" onClick={goHome} style={{ cursor: "pointer" }}>Home</span>
                <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => navigate("/favorites")}>Favorites</span>
            </div>
        </nav>
    );
}

export default NavBar;
