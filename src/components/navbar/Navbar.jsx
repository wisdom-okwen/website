import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <h2 id="name">Wisdom Okwen</h2>
                <div className="nav-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#experiences" className="nav-link">Experiences</a>
                    <a href="https://drive.google.com/file/d/1i9hknt0d2bPmKYwxHqnJXHnh8LjkAO5W/view?usp=drive_link" className="nav-link" target="_blank">
                        Resume
                    </a>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;