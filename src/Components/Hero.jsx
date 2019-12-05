import React from 'react';

const Hero = () => {
    return (
        <div className="Hero">
                <img className="Hero_image" src={require('../Img/boots.jpg')} alt="pair of boots and shoes in the snow"></img>
                <br />
                <h2 className="Hero_cta"> Shop Winter Shoes</h2>
                <br />
                <button className="Hero--button"> Shop Winter</button>
        </div>
    )
}

export default Hero;