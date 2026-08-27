import { useState } from "react";
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
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </label>

            <label>
                Email
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </label>

            <label>
                Inquiry
                <textarea
                    value={inquiry}
                    onChange={(event) => setInquiry(event.target.value)}
                    required
                />
            </label>

            <button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send"}
            </button>

            {status === "success" && <p>Thanks, your message was sent.</p>}
            {status === "error" && <p>Something went wrong, please try again.</p>}
        </form>
    );
}
