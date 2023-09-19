import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="contacts">
        <ul>
          <li>
            <a href="#" target="blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#" target="blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#" target="blank">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
