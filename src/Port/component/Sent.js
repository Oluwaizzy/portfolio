import { motion, AnimatePresence } from "framer-motion";
const Sent = ({ show, setShow }) => {
  const overLay = {
    begin: { opacity: 0, top: "-100%" },
    end: { opacity: 1, top: 0, transition: { duration: 1 } },
  };

  const modalMotion = {
    begin: { top: "-100px", opacity: 0 },
    end: { top: "50%", transition: { duration: 1, delay: 1 }, opacity: 1 },
  };

  return (
    <AnimatePresence onExitComplete>
      {show && (
        <motion.div
          className="overlay"
          variants={overLay}
          initial="begin"
          animate="end"
          exit="begin"
        ></motion.div>
      )}
      {show && (
        <motion.div
          className="sent-modal"
          variants={modalMotion}
          animate="end"
          initial="begin"
          exit="begin"
        >
          <div className="thank">We have received your message</div>
          <div className="we">We will get back to you shortly</div>
          <button onClick={() => setShow(false)}>Okay!</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sent;
