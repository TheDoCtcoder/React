import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h1>A propos</h1>
            <br />
            <p>Pages réalisées à partir du cours de fromscratch sur youtube</p>
            <br />
            <p>Avec Axio et une api rest pour aller chercher les pays dans une base de donnée</p>
        </div>
    );
};

export default About;