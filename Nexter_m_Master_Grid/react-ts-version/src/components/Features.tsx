import React from "react";

export const Features: React.FC = () => {
    return (
        <section className="features">
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="sprite.svg#icon-global"/>
                </svg>
                <h4 className="heading-4 heading-4--dark">World`s best luxury homes</h4>
                <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                    distinctio necessitatibus pariatur voluptatibus.
                </p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="sprite.svg#icon-trophy"/>
                </svg>
                <h4 className="heading-4 heading-4--dark">Only best properties</h4>
                <p className="feature__text">
                    Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
                </p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="sprite.svg#icon-map-pin"/>
                </svg>
                <h4 className="heading-4 heading-4--dark">All homes in a top locations</h4>
                <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                    distinctio necessitatibus pariatur voluptatibus.
                </p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="sprite.svg#icon-key"/>
                </svg>
                <h4 className="heading-4 heading-4--dark">New home in one week</h4>
                <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                    distinctio necessitatibus pariatur voluptatibus.
                </p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="sprite.svg#icon-presentation"/>
                </svg>
                <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
                <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                    distinctio necessitatibus pariatur voluptatibus.
                </p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="sprite.svg#icon-lock"/>
                </svg>
                <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
                <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                    distinctio necessitatibus pariatur voluptatibus.
                </p>
            </div>
        </section>
    );
};