import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Serhii Kalinichenko</h2>
      <section className="contacts">
        <h3>Contacts</h3>
        <hr />
        <h4>Address</h4>
        <p>Kyiv, Ukraine</p>
        <h4>Mobile Number</h4>
        <a href="tel:+380688513892">+380688513892</a>
        <h4>E-mail</h4>
        <a href="mailto:directiveofkali@gmail.com">directiveofkali@gmail.com</a>
        <h4>LinkedIn</h4>
        <a href="https://www.linkedin.com/">https://www.linkedin.com/</a>
      </section>
      <section className="languages">
        <h3>Languages</h3>
        <hr />
        <p>Ukrainian - Native</p>
        <p>English - B2</p>
      </section>
    </div>
  );
};

export default ContactInfo;
