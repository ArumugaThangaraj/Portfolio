import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../App.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID

        )

            .then(
                (result) => {
                    alert("✅ Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("❌ Failed to send message. Please try again.");
                    console.error(error.text);
                }
            );
    };

    return (
        <section id="contact" className="section">
            <div className="container text-center">
                <h2>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            name="message"
                            className="form-control"
                            rows="4"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>

    );
};

export default Contact;
