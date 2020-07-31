import React from 'react'
import { Link } from 'react-router-dom';
import { Label } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => (
  <nav id="sidebar">
    <div className="p-4 pt-5">
      <Link href="#" className="img logo rounded-circle mb-5" style={{ backgroundImage: 'url(https://www.ucdavis.edu/sites/default/files/styles/panopoly_image_full/public/general/coronavirus-covid-19-icon-uc-davis-200.png)' }} />
      <ul className="list-unstyled components mb-5">
        <li>
          <Link to="/indonesia">Indonesia</Link>
        </li>
        <li>
          <Link to="/dunia">Dunia</Link>
        </li>
        <li>
          <a href="https://www.iblogtren.com">My Blogs </a>
        </li>
        <Label>Social Media</Label>
        <div className="social-container">
          <a
            href="https://www.facebook.com/decker.densuz/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <span>  </span>
          <a
            href="https://www.instagram.com/learnbuildteach"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <span>  </span>
          <a
            href="https://www.github.com/densuz"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </ul>
      <div className="footer">
        <p>Copyright © 2020 Deni Susanto <br />All rights reserved.</p>
      </div>
    </div>
  </nav>
)

export default Sidebar;