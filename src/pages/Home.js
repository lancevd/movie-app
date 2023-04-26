import React from 'react'

import Categories from "../components/categories/Categories";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header"; 
import Testimonials from '../components/testimonials/Testimonials';
import Footer from '../components/footer/Footer'; 
import '../components/hero/hero.css';
import '../components/categories/categories.css';
import '../components/featured/featured.css';
import '../components/pricing/pricing.css';
import '../components/testimonials/testimonials.css';


const Home = () => {
  return (
    <div>
        <Header />
        <div className="spacer" ></div>
        <Categories />
        <div className="spacer" ></div>
        <Featured />
        <div className="spacer" ></div>
        <Testimonials />
        <div className="spacer" ></div>
        <Footer />
    </div>
  )
}

export default Home