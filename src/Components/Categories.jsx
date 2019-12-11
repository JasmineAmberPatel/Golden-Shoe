import React from 'react';

const Categories = () => {
    return (
        <div className="Categories">
            <div className="Categories_box">
                <img className="Categories_image" src={require('../Img/heels.png')} alt="pair of heels"></img>
                <br />
                <h2 className="Categories_description">Pretty Party Shoes</h2>
                <br />
                <button className="btn btn-dark">Shop Heels</button>
            </div>
            <div className="Categories_box">
                <img className="Categories_image" src={require('../Img/man-boots.png')} alt="pair of mans boots"></img>
                <br />
                <h2 className="Categories_description">Step Out In Style</h2>
                <br />
                <button className="btn btn-dark">Shop Mens Smart</button>
            </div>
            <div className="Categories_box">
                <img className="Categories_image" src={require('../Img/trainer.png')} alt="trainer"></img>
                <br />
                <h2 className="Categories_description">Comfortable and Cool</h2>
                <br />
                <button className="btn btn-dark">Shop Trainers</button>
            </div>
            <div className="Categories_box">
                <img className="Categories_image" src={require('../Img/kids.png')} alt="kids trainers"></img>
                <br />
                <h2 className="Categories_description">Cosy Kids Feet</h2>
                <br />
                <button className="btn btn-dark">Shop Kids Boots</button>
            </div>
            <div className="Categories_box">
                <img className="Categories_image" src={require('../Img/baby.png')} alt="baby shoes"></img>
                <br />
                <h2 className="Categories_description">Tiny Toes</h2>
                <br />
                <button className="btn btn-dark">Shop Baby Shoes</button>
            </div>
            <div className="Categories_box">
                <img className="Categories_image" src={require('../Img/welly.png')} alt="pair of wellies"></img>
                <br />
                <h2 className="Categories_description">Winter Waterproofs</h2>
                <br />
                <button className="btn btn-dark">Shop Outdoors</button>
            </div>
        </div>
    )
}

export default Categories;