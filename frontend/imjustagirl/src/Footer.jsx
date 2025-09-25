import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <div className="footer">
      <div className="footer1">

        <div className="footer-text">
          <h2>Made for the girlies who love style, sweets, and  a little sparkle every day.</h2>
          <div className="rating">
            <h2>Show Your Love</h2>
            <div className="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text"></label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text"></label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text"></label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text"></label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text"></label>
            </div>
          </div>
        </div>

        <div className="footer-mail">
          <h4 className="footer-heading">Join Our Girl Gang 💌</h4>
          <p>Get updates, style tips & exclusive freebies.</p>
          <input type="email" placeholder="tasha02520@gmail.com"
            style={{ padding:'7px', borderRadius:'10px', border:'1px solid black', width:'100%', marginBottom:'10px' }} />
          <button className="footer-btn">Subscribe</button>
        </div>

        <div className="footer-follow">
          <h4 className="footer-heading">Follow Us</h4>
          <p>Tag us <u>@tashaaa.05</u> to get featured!</p>
          <Link className='flink' to="#instagram"> <p>🎀Instagram</p> </Link>
          <Link className='flink' to="#pinterest"> <p>📌Pinterest</p> </Link>
          <Link className='flink' to="#youtube"> <p>🎥YouTube</p> </Link>
        </div>

      </div>

      {/* Small print */}

      <div className="footer-copyright">
        © 2025 I'm just a girl. All rights reserved. | Privacy Policy | Terms of Service
      </div>

    </div>
  );
};

export default Footer;