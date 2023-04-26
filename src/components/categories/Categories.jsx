import React from 'react';

import {GiPistolGun} from 'react-icons/gi'

const Categories = () => {
  return (
    <section id='categories' className='container'>
        <div id="cat-title">
            <h2>Choose the Type of Film You Like</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt magni aliquid atque culpa officia.</p>
        </div>

        <div className="space"></div>

        <div id="cat-grid">
            <div className="cat-gridbox">
                <div className="cat-gridbox-icon"><GiPistolGun /></div>
                <div className="cat-gridbox-info">
                    <h5>Action</h5>
                    <p>1,300+ Movies</p>
                    <a href="#" className="cat-gridbox-link">View More</a>
                </div>
            </div>

            <div className="cat-gridbox">
                <div className="cat-gridbox-icon"><GiPistolGun /></div>
                <div className="cat-gridbox-info">
                    <h5>Fantasy</h5>
                    <p>800+ Movies</p>
                    <a href="#" className="cat-gridbox-link">View More</a>
                </div>
            </div>

            <div className="cat-gridbox">
                <div className="cat-gridbox-icon"><GiPistolGun /></div>
                <div className="cat-gridbox-info">
                    <h5>Comedy</h5>
                    <p>1,000+ Movies</p>
                    <a href="#" className="cat-gridbox-link">View More</a>
                </div>
            </div>

            <div className="cat-gridbox">
                <div className="cat-gridbox-icon"><GiPistolGun /></div>
                <div className="cat-gridbox-info">
                    <h5>Drama</h5>
                    <p>1,500+ Movies</p>
                    <a href="#" className="cat-gridbox-link">View More</a>
                </div>
            </div>

            <div className="cat-gridbox">
                <div className="cat-gridbox-icon"><GiPistolGun /></div>
                <div className="cat-gridbox-info">
                    <h5>Mystery</h5>
                    <p>500+ Movies</p>
                    <a href="#" className="cat-gridbox-link">View More</a>
                </div>
            </div>

            <div className="cat-gridbox">
                <div className="cat-gridbox-icon"><GiPistolGun /></div>
                <div className="cat-gridbox-info">
                    <h5>Romance</h5>
                    <p>900+ Movies</p>
                    <a href="#" className="cat-gridbox-link">View More</a>
                </div>
            </div>

            <div className="cat-gridbox">
                <div className="cat-gridbox-icon"><GiPistolGun /></div>
                <div className="cat-gridbox-info">
                    <h5>Horrow</h5>
                    <p>700+ Movies</p>
                    <a href="#" className="cat-gridbox-link">View More</a>
                </div>
            </div>

            <div className="cat-gridbox">
                <div className="cat-gridbox-icon"><GiPistolGun /></div>
                <div className="cat-gridbox-info">
                    <h5>Thriller</h5>
                    <p>500+ Movies</p>
                    <a href="#" className="cat-gridbox-link">View More</a>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Categories