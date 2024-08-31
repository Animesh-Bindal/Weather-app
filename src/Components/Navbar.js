import React from 'react'
import './cssfiles/Navbarr.css';

export default function Navbar(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center py-2 px-5 navbar-container" style={{ background: "#F0E2E7" }}>
                <div><h1 className="navbar-title">What's - The Weather App</h1></div>
                <div><h1 className="navbar-city">City: {capitalize(props.textt)}</h1></div>
            </div>
        </>
    )
}
