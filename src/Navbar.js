import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav style={{backgroundColor:"peachpuff"}} className="navbar bg-light">
                <div className="container-fluid">
                    <p style={{fontFamily:"cursive",fontSize:"30"}} className="navbar-brand"> SPORTS Store</p>
                    <form className="d-flex" role="search">
                        <Link type='button' to="/Cart">cart</Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
