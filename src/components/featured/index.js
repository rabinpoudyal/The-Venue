import React from 'react';
import Carousel from './Carousel';
import TimeUnitl from './TimeUntil';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
            
            <Carousel />

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>

            <TimeUnitl />

        </div>
    );
};

export default Featured;