import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2h6c6uy",
        "template_bkgb52q",
        form.current,
        "gQsWlDxfYe_5qbMh7"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <MdOutlineEmail className='icon' />
            <h4>Email</h4>
            <h5>mathewadeyemi7654@gmail.com</h5>
            <a href='mailto:mathewadeyemi7654@gmail.com' target='_blank'>
              Send a Message
            </a>
          </article>
          <article className='contact-option'>
            <RiMessengerLine className='icon' />
            <h4>Message Me Now</h4>
            <h5>Mathew Ojo</h5>
            <a href='https://m.me/mathew.ojo.52090' target='_blank'>
              Send a Message
            </a>
          </article>
          <article className='contact-option'>
            <BsWhatsapp className='icon' />
            <h4>WhatsApp</h4>
            <h5>+2348109774285</h5>
            <a href='https://wa.me/+2348109774285' target='_blank'>
              {" "}
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='text' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            placeholder='Your Message'
            required
            rows='7'
          ></textarea>
          <button className='btn center btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
