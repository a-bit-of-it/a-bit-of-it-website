import { useState } from "react";
import "./GetInTouch.css";
import {useTranslation} from "react-i18next";
import {submitContact} from "../services/contactService.js";
import {useInquiry} from "../InquiryContext.jsx";

export default function GetInTouch () {
    const { t } = useTranslation();
    const { inquiry, setInquiry, inquiryRef } = useInquiry();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
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
            <div className="section-inner">
                <h1>{t('get-in-touch.header')}</h1>
                <p className="contact-us-subtitle">
                    {t('get-in-touch.cta')}
                </p>

                <form className="contact-us-form" onSubmit={handleSubmit}>

                    <label className="contact-us-field">
                        {t('get-in-touch.inquiry')}
                        <textarea
                            ref={inquiryRef}
                            value={inquiry}
                            onChange={(event) => setInquiry(event.target.value)}
                            required
                            maxLength={10000}
                        />
                    </label>

                    <div className="contact-us-row">
                        <label className="contact-us-field">
                            {t('get-in-touch.name')}
                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                                maxLength={200}
                            />
                        </label>

                        <label className="contact-us-field">
                            {t('get-in-touch.email')}
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                maxLength={320}
                            />
                        </label>

                        <label className="contact-us-field">
                            {t('get-in-touch.company')}
                            <input
                                type="text"
                                value={company}
                                onChange={(event) => setCompany(event.target.value)}
                                required
                                maxLength={320}
                            />
                        </label>
                    </div>

                    <button type="submit" className="contact-us-submit btn-primary" disabled={status === "submitting"}>
                        {status === "submitting" ? t('get-in-touch.sending') : t('get-in-touch.send')}
                    </button>

                    <p className="contact-us-status" role="status" aria-live="polite">
                        {status === "success" && (
                            <span className="contact-us-status-success"> {t('get-in-touch.sent')}</span>
                        )}
                        {status === "error" && (
                            <span className="contact-us-status-error"> {t('get-in-touch.something-went-wrong')}</span>
                        )}
                    </p>
                </form>
            </div>
        </div>
    );
}
