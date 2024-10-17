import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footerContainer">
        <div className="footerSectionOne">
            <div className="subscribe">
                <h4>BE THE FIRST TO KNOW</h4>
                <p>Sign up for updates from mettā muse.</p>
                <div className="input">
                <input type="text" placeholder="Enter your e-mail..."></input>
                <button type="button">SUBSCRIBE</button>
                </div>
            </div>
            <div className="contact">
                <h4>CONTACT US</h4>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
                <h4>CURRENCY</h4>
                <p className="currency"><img src="/usFlag.png" alt="US flag" /> &#9671; USD</p>
                <p className="contactLast">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <div className="footerSectionTwo">
            <div className="meta">
                <h4>mettā muse</h4>
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Boutiques</p>
                <p>Contact Us</p>
                <p>EU Compliances Docs</p>
            </div>
            <div className="links">
            <h4>QUICK LINKS</h4>
                <p>Orders & Shipping</p>
                <p>Join/Login as a Seller</p>
                <p>Payment & Pricing</p>
                <p>Return & Refunds</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="follow">
                <h4>FOLLOW US</h4>
                <div className="socialIcons">
                    <img src="/insta.png" alt="insta" />
                    <img src="/a.png" alt="linkedin" />
                </div>
                <h4>mettā muse ACCEPTS</h4>
                <div className="payIcons">
                    <img src="/gpay.png" alt="gpay" />
                    <img src="/mastercard.png" alt="mastercard" />
                    <img src="/paypal.png" alt="paypal" />
                    <img src="/amex.png" alt="amex" />
                    <img src="/applepay.png" alt="applepay" />
                    <img src="violetpay.png" alt="pay" />
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer