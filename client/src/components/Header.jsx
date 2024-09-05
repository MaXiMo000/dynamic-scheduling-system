import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header-container">
        <nav>
            <ul>
                <Link to="/availability"><li>Manage Availability</li></Link>
                <Link to="/"><li>Login</li></Link>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/sessions"><li>Session</li></Link>
            </ul>
        </nav>
    </header>
);

export default Header;
