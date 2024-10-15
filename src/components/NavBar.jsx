import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/company-info">Company Info</Link>
            <Link to="/login">Logout</Link>
        </nav>
    );
}

export default NavBar;
