import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <ul className="nav">
                <li className="nav__item"><a href="#" className="nav__link">Find your dream home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Request proposal</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Download home planner</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact us</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Submit your property</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Come work with us</a></li>
            </ul>
            <p className="copyright">&copy; Copyright test text Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias aut cum cumque iure modi molestias, quibusdam similique velit! Cum dicta dolore eaque facere illum
                libero, mollitia quaerat repellendus similique veniam.</p>
        </footer>
    );
};