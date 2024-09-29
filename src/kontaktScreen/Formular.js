import React from "react";
import "./Formular.css";

const Formular = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Wird gesendet..."); 

    const formData = new FormData(event.target);
    formData.append("access_key", "660a64a8-afe9-45db-9072-6cf5de4fbaa7"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "Ihr Formular wurde erfolgreich eingereicht. Wir werden uns so schnell wie möglich bei Ihnen melden."
        );
        event.target.reset();
      } else {
        console.error("Error:", data); 
        setResult(data.message || "Submission failed, please try again."); 
      }
    } catch (error) {
      console.error("Fetch error:", error); 
      setResult("An error occurred. Please try again later."); 
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <div className="info">
          <div className="input-box">
            <label htmlFor="name">Ihr Name</label> <br />
            <input
              type="text"
              id="name"
              className="field"
              name="name"
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="email">E-Mail-Adresse</label> <br />
            <input
              type="email"
              id="email"
              className="field"
              name="email"
              required
            />
          </div>
        </div>
        <div className="input-box">
          <label htmlFor="message">Ihre Nachricht</label> <br />
          <textarea
            id="message"
            name="message"
            className="field mess"
            required
          ></textarea>
        </div>
        <button type="submit">Nachricht senden</button>
        {result && <p className="result-message">{result}</p>}{" "}
      </form>
    </section>
  );
};

export default Formular;
