import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="upper_div">
        <div className="logo_div">
          <img src="./Icons/logo.png" alt="Company Logo" />
          <div className="hi_user">
            Hi, User!
          </div>
        </div>
        <div className="grid_div">
          <div className="grid">
            <h2>The Basics</h2>
            <Link to="/about-tmbd">About TMDB</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/support-forums">Support Forums</Link>
            <Link to="/api">API</Link>
            <Link to="/system-status">System Status</Link>
          </div>
          <div className="grid">
            <h2>Get Involved</h2>
            <Link to="/contribution-bible">Contribution Bible</Link>
            <Link to="/add-new-movie">Add New Movie</Link>
            <Link to="/add-new-tv-show">Add New TV Show</Link>
          </div>
          <div className="grid">
            <h2>Community</h2>
            <Link to="/guidelines">GuideLines</Link>
            <Link to="/discussions">Discussions</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </div>
          <div className="grid">
            <h2>LEGAL</h2>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/api-terms-of-use">API Terms of Use</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/dmca-policy">DMCA Policy</Link>
          </div>
        </div>
      </div>
      <div className="lower_div">
        Build 8f96b85 (7749)
      </div>
    </footer>
  );
}

export default Footer;
