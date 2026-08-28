import { useState } from "react";
import "./ContactUs.css";
import { submitContact } from "./services/contactService";

export default function ContactUs ()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [inquiry, setInquiry] = useState("");
    const [status, setStatus] = useState("idle");

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus("submitting");
        try {
            await submitContact({ name, email, inquiry });
            setStatus("success");
            setName("");
            setEmail("");
            setInquiry("");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    return (
        <div className="contact-us" id="contact">
            <h1>Get in touch</h1>
            <p className="contact-us-subtitle">
                Got a project in mind, or just want to say hi? Send us a message and we'll get back to you.
            </p>

            <form className="contact-us-form" onSubmit={handleSubmit}>
                <div className="contact-us-row">
                    <label className="contact-us-field">
                        Name
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            maxLength={200}
                        />
                    </label>

                    <label className="contact-us-field">
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            maxLength={320}
                        />
                    </label>
                </div>

                <label className="contact-us-field">
                    Inquiry
                    <textarea
                        value={inquiry}
                        onChange={(event) => setInquiry(event.target.value)}
                        required
                        maxLength={10000}
                    />
                </label>

                <button type="submit" className="contact-us-submit" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send message"}
                </button>

                <p className="contact-us-status" role="status" aria-live="polite">
                    {status === "success" && (
                        <span className="contact-us-status-success">Thanks, your message was sent.</span>
                    )}
                    {status === "error" && (
                        <span className="contact-us-status-error">Something went wrong, please try again.</span>
                    )}
                </p>
            </form>
        </div>
    );
}
