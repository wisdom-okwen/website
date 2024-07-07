import React from "react";
import './Experiences.css';
import experiences from "../../data/experiences";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ExperienceCard from "../cards/ExperienceCard";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Experiences() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 2024 },
          items: 5
        },
        largeDesktop: {
            breakpoint: { max: 2024, min: 1024},
            items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 470, min: 0 },
          items: 1
        }
    };
    return (
        <div id="experiences">
            <div className="header">
                <h1 id="section-name">Experiences</h1>
            </div>
            <div className="carousel">
                <Carousel 
                    arrows={false}
                    draggable={true}
                    swipeable={true}
                    autoPlay={true} 
                    infinite={true}
                    responsive={responsive}
                >
                    { experiences.map((exp, ind) => (
                        <div key={ind} className="exp-card">
                            <ExperienceCard {...exp}/>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
