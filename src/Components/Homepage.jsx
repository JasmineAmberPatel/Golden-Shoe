import React, { Fragment } from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Hero from './Hero';

const Homepage = () => {
    return (
        <Fragment>
            <Banner />
            <Hero />
            <Categories />
        </Fragment>
    )
}

export default Homepage;