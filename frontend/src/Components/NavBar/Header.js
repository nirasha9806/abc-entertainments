import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
            
            <h2 className="text-white">ABC</h2>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-white ml-5" to="/add">Add</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link text-white ml-5" to="/">Albums</Link>
                    </li> 
                </ul>        
            </div>
        </nav>

    );
}
export default  Navbar;