function ContactInfo() {
  return (
    <div className="contact-info">

      <div className="contact-info-header">
        <p className="section-tag">CONTACT DETAILS</p>

        <h2>
          Have a question?
          <span> We're here.</span>
        </h2>
      </div>

      <div className="contact-method">

        <span className="contact-icon">↗</span>

        <div>
          <p>WhatsApp</p>

          <a
            href="https://wa.me/918086745229"
            target="_blank"
            rel="noreferrer"
          >
            +91 80867 45229
          </a>
        </div>

      </div>

      <div className="contact-method">

        <span className="contact-icon">↗</span>

        <div>
          <p>Email</p>

          <a href="mailto:info@hyzra.com">
            info@hyzra.com
          </a>
        </div>

      </div>

      <div className="contact-method">

        <span className="contact-icon">↗</span>

        <div>
          <p>Location</p>

          <span>Kerala, India</span>
        </div>

      </div>

    </div>
  );
}

export default ContactInfo;