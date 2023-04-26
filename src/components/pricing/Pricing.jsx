
const Pricing = () => {
  return (
    <div id="pricing" className="container">
        <div id="price-title">
            <h2>Choose a Pricing Plan that Suits for You</h2>
            <p>We present 3 packages tha you can choose to start watching the movies that you like at low prices according to your needs</p>
        </div>

        <div className="space"></div>

        <div id="pricing-boxes">
            <div className="pricing-box">
                <h4>Gold Plan</h4>
                <p>For those who like it simple</p>
                <p className="price-amt"><span className="price-em">$9.99</span>/month</p>
                <ul>
                    <li>Unlimited Movies</li>
                    <li>No Ads</li>
                    <li>25 Downloading Movies</li>
                    <li>10 TV Channels</li>
                </ul>

                <button className="pricing-btn">Choose Plan</button>

                <a href="#" id="pricing-link">About this Plan</a>

            </div>

            <div className="pricing-box" id="diamond">
                <h4>Diamond Plan</h4>
                <p>For those who like it simple</p>
                <p className="price-amt"><span className="price-em">$19.99</span>/month</p>
                <ul>
                    <li>Unlimited Movies</li>
                    <li>No Ads</li>
                    <li>25 Downloading Movies</li>
                    <li>10 TV Channels</li>
                </ul>

                <button className="pricing-btn">Choose Plan</button>

                <a href="#" className="pricing-link">About this Plan</a>

            </div>

            <div className="pricing-box">
                <h4>Platinum Plan</h4>
                <p>For those who like it simple</p>
                <p className="price-amt"><span className="price-em">$34.99</span>/month</p>
                <ul>
                    <li>Unlimited Movies</li>
                    <li>No Ads</li>
                    <li>25 Downloading Movies</li>
                    <li>10 TV Channels</li>
                </ul>

                <button className="pricing-btn">Choose Plan</button>

                <a href="#" id="pricing-link">About this Plan</a>
            </div>

        </div>
    </div>
  )
}

export default Pricing