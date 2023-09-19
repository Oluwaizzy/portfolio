import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navShow, setNavShow] = useState(true);

  return (
    <div className="nav_height">
      <div className="navbar">
        <nav>
          <div className="logo">
            <img src="./Port/logo 2.png" alt="" className="logo_pic" />
          </div>
          <ul className={navShow ? "hide" : ""}>
            <li onClick={() => setNavShow(true)}>
              <Link
                to="intro"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={() => setNavShow(true)}
              >
                Intro
              </Link>
            </li>
            <li onClick={() => setNavShow(true)}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavShow(true)}
              >
                About
              </Link>
            </li>
            <li onClick={() => setNavShow(true)}>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavShow(true)}
              >
                Projects
              </Link>
            </li>
            <li onClick={() => setNavShow(true)}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-180}
                duration={500}
                onClick={() => setNavShow(true)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* </div> */}
          <button
            className="lines"
            onClick={() => setNavShow(!navShow)}
            onBlur={() => setNavShow(true)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
// to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
// onSetActive={this.handleSetActive}
