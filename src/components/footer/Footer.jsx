import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='contain grid grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className="footer-menu">
                <h4 className='text-xl lg:text-3xl'>Services</h4>
                <div className="footer-menu-links">
                    <a href="/movies">Movies</a>
                    <a href="/movies">Rentals</a>
                    <a href="/movies">Buy</a>
                    <a href="/collections">Collections</a>
                </div>
            </div>

            <div className="footer-menu">
                <h4 className='text-xl lg:text-3xl'>Information</h4>
                <div className="footer-menu-links">
                    <a href="/contact">Contact</a>
                    <a href="/about">About</a>
                    <a href="/register">Register</a>
                    <a href="/download">Download App</a>
                </div>
            </div>

            <div className="footer-menu">
                <h4 className='text-xl lg:text-3xl'>Quicklinks</h4>
                <div className="footer-menu-links">
                    <a href="/terms">Terms of Use</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/partnership">Partnership</a>
                    <a href="/contact">Enquiries</a>
                </div>
            </div>

            <div className="footer-menu">
                <h4 className='text-xl lg:text-3xl'>Get in Touch</h4>
                    <p>Questions or feedback? Reach out and we'll help you find great movies and shows. Follow us on social channels for recommendations and updates.</p>
                <div id="footer-socials">

                </div>
            </div>


        </div>


        <div id="footer-bottom" className='contain'>
            <hr />
            <div className="space"></div>
            <p>&copy; MovRent 2022 | All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer