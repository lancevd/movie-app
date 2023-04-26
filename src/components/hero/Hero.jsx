import React from 'react';
import {MdPlayCircleFilled} from 'react-icons/md'

const Hero = () => {
  return (
    <div className='hero container'>
        <div id="hero-left">
            <div id="hl-greeting">
                <p>Welcome</p>
                <div id='after'></div>
            </div>
            <h2>Let's Make Your Own Cinema</h2>
            <p id="hl-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non, reprehenderit voluptates blanditiis.</p>
            <div id="hero-btns">
                <button id="hb-btn-pry">Show Plan</button>
                <button id="hb-btn-sec">Get Started</button>
            </div>
        </div>
        <div id="hero-right">
            <div id="hr-icon"><MdPlayCircleFilled /></div>
            <p>Watching Now</p>

        </div>
    </div>
  )
}

export default Hero