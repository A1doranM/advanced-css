import React from "react";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <img src="logo.png" alt="Nexter" className="header__logo"/>
            <h3 className="heading-3">Your own home:</h3>
            <h1 className="heading-1">The ultimate personal freedom</h1>
            <button className="btn header__btn">View our properties</button>
            <div className="header__seenon-text">Seen on</div>
            <div className="header__seenon-logos">
                <img src="logo-bbc.png" alt=""/>
                <img src="logo-forbes.png" alt=""/>
                <img src="logo-techcrunch.png" alt=""/>
                <img src="logo-bi.png" alt=""/>
            </div>
        </header>
    );
};