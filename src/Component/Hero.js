import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <h1>Hero section</h1>
            <Link to="login">
                <button>call me</button>
            </Link>
        </div>
    );
};

export default Hero;