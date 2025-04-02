import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 border-top border-3 border-white">
      <div className="container">
        <div className="row">
          
          {/* Left Section - Navigation Links */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://in.bookmyshow.com/careers" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="https://in.bookmyshow.com/contactus" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="https://support.bookmyshow.com/support/solutions/154953" className="text-light text-decoration-none">FAQ</a></li>
              <li><a href="https://in.bookmyshow.com/terms-and-conditions" className="text-light text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Center Section - Social Media Icons */}
          <div className="col-md-4 text-center">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <a href="https://www.facebook.com/BookMyShowIN/" className="text-light fs-4"><FaFacebookF /></a>
              <a href="https://www.instagram.com/bookmyshowin/?hl=en" className="text-light fs-4"><FaInstagram /></a>
              <a href="https://x.com/bookmyshow_live?lang=en" className="text-light fs-4"><FaTwitter /></a>
              <a href="https://www.youtube.com/bookmyshow" className="text-light fs-4"><FaYoutube /></a>
            </div>
          </div>

          {/* Right Section - Download App Links */}
          <div className="col-md-4 text-md-end text-center">
            <h5>Get The App</h5>
            <div className="d-flex justify-content-md-end justify-content-center gap-2 mt-2">
              <a href="https://apps.apple.com/in/app/bookmyshow-movies-events/id405894842" className="text-light fs-4"><FaApple /> App Store</a>
              <a href="https://g.co/kgs/Jj4skmU" className="text-light fs-4"><FaGooglePlay /> Play Store</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} BookMyShow Clone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
