import React from 'react';
import './App.css';
import {ParallaxMountains} from './components/ParallaxMountains';

function App() {
    return (
        <>
            <ParallaxMountains />
            <div style={{height: "9000px"}} />
        </>
    );
}

export default App;
