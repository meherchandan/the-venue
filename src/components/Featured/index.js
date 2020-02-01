import React from 'react'
import Carousel from './Carousel';
import Timeunit from './Timeunit'
const Featured = ()=> {
    return (
        <div style={{position:'relative'}}>
            <Carousel /> 
            <div className="artist_name">
                <div className = "wrapper">
                    Ariana Grande
                </div>
            </div>
            <Timeunit />
        </div>
    )
}
export default Featured;
