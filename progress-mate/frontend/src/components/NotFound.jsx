import React from "react";
import { Link } from "react-router-dom";

// CSS
import '../css/NotFound.css';

function NotFound() {
    return(
        <div className="not_found">
            <lord-icon
                src="https://cdn.lordicon.com/cbigqefp.json"
                trigger="loop"
                delay="1000"
                stroke="light"
                state="in-reveal"
                style={{width:'250px', height:'250px'}}>
            </lord-icon>

            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>

            <Link to="/" className="back_to_home"><i className='bx bx-arrow-back'></i>Go back to Home</Link>
        </div>
    );
}

export default NotFound;

