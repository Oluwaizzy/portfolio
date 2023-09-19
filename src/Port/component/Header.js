// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const headerMotion = {
    initial: { y: "-100vh" },
    final: { y: 0, transition: { delay: 0.5 } },
  };
  const imageVariant = {
    initial: { opacity: 0 },
    final: { opacity: 1, transition: { duration: 1, delay: 1 } },
  };
  return (
    <header id="intro">
      <div className="main_header">
        <motion.div
          variants={headerMotion}
          initial="initial"
          animate="final"
          className="information"
        >
          <h2>Hello,</h2>
          <div className="name">
            I am <span className="my_name">Adegbe Israel</span>
          </div>
          <div className="work">Front End Web Developer</div>
          <p className="summ">
            I specialize in developing nice, interactive and responsive website
          </p>
        </motion.div>
        <motion.img
          variants={imageVariant}
          initial="initial"
          animate="final"
          src="Port/pics/typing.png"
          alt=""
          className="header_img"
        />
      </div>
    </header>
  );
};

export default Header;
