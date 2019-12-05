import React from 'react';
import '../Styles/App.css'

const Hero = () => {
    return (
        <div className="Hero">
            <img className="Hero-image" src={require('../Img/Winter-Boots.jpg')} alt="pair of boots and shoes in the snow"></img>
            <h2 className="Hero-cta"> Shop Winter Shoes</h2>
            <button className="Hero-button"> Shop Winter</button>
        </div>
    )
}

export default Hero;