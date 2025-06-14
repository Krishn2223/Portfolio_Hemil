import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const userId = "YOUR_USER_ID";

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setSubmitStatus({
          type: "success",
          message:
            "Your message has been sent successfully! I will get back to you soon.",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        setSubmitStatus({
          type: "error",
          message:
            "Failed to send your message. Please try again or contact me directly via email.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact</h1>
          <p>Get in touch with me via social media or send me an email.</p>

          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send me a message</h2>

          {submitStatus && (
            <div className={`status-message ${submitStatus.type}`}>
              <i
                className={`fas ${
                  submitStatus.type === "success"
                    ? "fa-check-circle"
                    : "fa-exclamation-circle"
                }`}
              ></i>
              <span>{submitStatus.message}</span>
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
