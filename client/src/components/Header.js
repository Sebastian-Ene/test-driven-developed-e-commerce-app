import React from "react";
import { Link } from "react-router-dom";
import "../style/header.scss";
export default function Header() {
    return (
        <div className="header-wrapper">
            <Link to="/" className="header-title header-btn">
                Programus
            </Link>
            <Link to="/courses" className="header-courses-btn header-btn">
                Courses
            </Link>
            <Link to="/profile" className="header-profile-btn header-btn">
                Profile
            </Link>
        </div>
    );
}
