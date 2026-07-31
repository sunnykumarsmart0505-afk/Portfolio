function Contact() {
  return (
    <section id="contact">

      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        Have a project in mind or want to discuss an opportunity?
        Feel free to reach out. I'd love to hear from you.
      </p>

      <div className="contact-form-container">

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

   <div className="contact-info">

  <div className="contact-card">
    <h3>📧 Email</h3>
    <a href="mailto:sunnykumarsmart0505@gmail.com">
      sunnykumarsmart0505@gmail.com
    </a>
  </div>

  <div className="contact-card">
    <h3>💻 GitHub</h3>
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noreferrer"
    >
      github.com/yourusername
    </a>
  </div>

  <div className="contact-card">
    <h3>💼 LinkedIn</h3>
    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      rel="noreferrer"
    >
      linkedin.com/in/yourusername
    </a>
  </div>
   
</div>
<p
  style={{
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "500",
    color: "#38bdf8",
    marginTop: "40px",
    letterSpacing: "0.5px",
  }}
>
  Thank you for Visiting ❤️
</p>
    </section>
  );
}

export default Contact;