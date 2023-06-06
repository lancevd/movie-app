import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='contain grid grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className="footer-menu">
                <h4 className='text-xl lg:text-3xl'>Services</h4>
                <div className="footer-menu-links">
                    <a href="">Movies</a>
                    <a href="">Rentals</a>
                    <a href="">Buy</a>
                    <a href="">Collections</a>
                </div>
            </div>

            <div className="footer-menu">
                <h4 className='text-xl lg:text-3xl'>Information</h4>
                <div className="footer-menu-links">
                    <a href="">Contact</a>
                    <a href="">About</a>
                    <a href="">Register</a>
                    <a href="">Download App</a>
                </div>
            </div>

            <div className="footer-menu">
                <h4 className='text-xl lg:text-3xl'>Quicklinks</h4>
                <div className="footer-menu-links">
                    <a href="">Terms of Use</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Patnership</a>
                    <a href="">Enquiries</a>
                </div>
            </div>

            <div className="footer-menu">
                <h4 className='text-xl lg:text-3xl'>Get in Touch</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae asperiores quos tempora accusantium. Ut deleniti odio quaerat harum exercitationem.</p>
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