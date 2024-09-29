import React from "react";
import "./Formular.css";

const Formular = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "660a64a8-afe9-45db-9072-6cf5de4fbaa7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="Formular">
      <section className="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>

          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

          <div className="input-box">
            <label>Your Message</label>
            <textarea
              name="message"
              className="field mess"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </section>
  );
};

export default Formular;
