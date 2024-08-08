import React from 'react';
import "./header.css";
import Logo from "./HCA_Logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="HCA+ Houston Healthcare" />
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href="#">My Health Resources</a></li>
                    <li><a href="#">Specialties</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Patients & Visitors</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Find A Doctor</a></li>
                    <li><a href="#">Manage Your Account</a></li>
                    <li><a href="#">My-HealthONE</a></li>
                    <li><a href="#">Search</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
