import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-title">
                WhatsNASACooking
            </Link>
            <div className="navbar-actions">
                {user ? (
                    <>
                        <span>Hi, {user.username}!</span>
                        <button
                            className="logout-button"
                            onClick={logout}
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
