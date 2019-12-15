import React from 'react';

const Hero = () => {
    return (
        <div className="Hero">
            <img className="Hero_image" src={require('../Img/boots.jpg')} alt="pair of boots and shoes in the snow"></img>
            <br />
            <h2 className="Hero_cta"> Shop Winter Shoes</h2>
            <br />
            <p className="Hero_tagline">Find the perfect shoes to keep your feet warm, dry and looking fly this winter.</p>
            <br />
            <button className="btn btn-dark"> Shop Winter</button>
        </div>
    )
}

export default Hero;