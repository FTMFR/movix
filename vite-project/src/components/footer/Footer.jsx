import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
          <li className="menuItem"></li>
        </ul>
        <div className="infoText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio at
          porro voluptates pariatur distinctio corrupti impedit! Voluptatem
          accusantium nam dolor!
        </div>

        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
