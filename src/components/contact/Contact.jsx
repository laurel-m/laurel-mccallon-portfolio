import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import "./contact.scss"

export default function ContactUs () {
  const form = useRef(); 
 
  const sendEmail = (e) => {
    e.preventDefault();
   
  emailjs.sendForm("laurel-m", "template_mlti27x", form.current, 'DkbuB2kczIyA_wbRo')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  };
  
  return (
    <div className="contact" id="contact">
        <div className="contact-wrapper">
        <h1>Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Subject" name="subject" />
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email Address" name="email" />
          <textarea name="message"placeholder="Your Message"  />
          <button type="submit" value="Send">Send</button>
        </form>
        <p>Copyright 2022 | Laurel McCallon</p>
      </div>
    </div>
  );
};
