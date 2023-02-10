import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import head from './head.png';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className= "Tilt br2 shadow-2" tiltMaxAngleX="50" tiltMaxAngleY="50" style={{ height: '150px', width: '150px', backgroundColor: 'darkgreen' }}>
                <div className="pa3">
                   <img src={head} alt='logo' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo