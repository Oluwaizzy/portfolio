import { useRef, useState, useEffect } from "react";
import Sent from "./Sent";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMessage(true);
    emailjs
      .sendForm(
        "service_7x1r30y",
        "template_bi7gb4c",
        e.target,
        "Uh1j_WSudqN34mSxQ"
      )
      .then(() => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        setShowMessage(true);
        setSendingMessage(false);
      });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="contact_part">
      <Sent show={showMessage} setShow={setShowMessage} />
      <div className="contact_page" id="contact">
        <div className="contact_left">
          <h1 className="left_contact">Get In Touch With Me</h1>
          <div className="contact_image_div" data-aos="fade-right">
            <img src="Port/pics/contact.png" alt="" className="contact_image" />
          </div>
        </div>

        <form action="" method="POST" onSubmit={sendEmail} data-aos="fade-left">
          <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="from_name" ref={nameRef} />
          </div>
          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" ref={emailRef} />
          </div>
          <div className="form_control">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="8"
              name="message"
              ref={messageRef}
            />
          </div>
          <div className="sendBtn">
            {sendingMessage ? (
              <button className="sending" disabled>
                Sending
                <div className="roll"></div>
              </button>
            ) : (
              <button className="send" type="submit">
                Send Message
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
