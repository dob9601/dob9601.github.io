import React from 'react';
import './App.css';
import {Footer} from './components/Footer';
import {Introduction} from './components/Introduction';
import {ParallaxMountains} from './components/ParallaxMountains';
import {Projects} from './components/Projects';

function App() {
    return (
        <>
            <ParallaxMountains />
            <Introduction />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
