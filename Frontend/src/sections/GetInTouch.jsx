import { useState } from "react";
import "./GetInTouch.css";
import {useTranslation} from "react-i18next";
import {submitContact} from "../services/contactService.js";
import {useInquiry} from "../InquiryContext.jsx";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function GetInTouch () {
    const { t } = useTranslation();
    const { inquiry, setInquiry, inquiryRef } = useInquiry();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [status, setStatus] = useState("idle");
    const [errors, setErrors] = useState({});

    function clearError(field) {
        setErrors((current) => {
            if (!current[field]) return current;
            const next = { ...current };
            delete next[field];
            return next;
        });
    }

    function validate() {
        const nextErrors = {};
        if (!inquiry.trim()) nextErrors.inquiry = t('get-in-touch.field-required');
        if (!name.trim()) nextErrors.name = t('get-in-touch.field-required');
        if (!email.trim()) {
            nextErrors.email = t('get-in-touch.field-required');
        } else if (!EMAIL_PATTERN.test(email)) {
            nextErrors.email = t('get-in-touch.invalid-email');
        }
        return nextErrors;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const nextErrors = validate();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

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
                <p className="contact-us-subheader">
                    {t('get-in-touch.subheader')}
                </p>

                <form className="contact-us-form" onSubmit={handleSubmit} noValidate>

                    <label className={`contact-us-field${errors.inquiry ? ' contact-us-field--invalid' : ''}`}>
                        <span>{t('get-in-touch.inquiry')} <span className="contact-us-required" aria-hidden="true">*</span></span>
                        <textarea
                            ref={inquiryRef}
                            value={inquiry}
                            onChange={(event) => { setInquiry(event.target.value); clearError('inquiry'); }}
                            required
                            maxLength={10000}
                            aria-invalid={Boolean(errors.inquiry)}
                        />
                        {errors.inquiry && <span className="contact-us-field-error">{errors.inquiry}</span>}
                    </label>

                    <div className="contact-us-row">
                        <label className={`contact-us-field${errors.name ? ' contact-us-field--invalid' : ''}`}>
                            <span>{t('get-in-touch.name')} <span className="contact-us-required" aria-hidden="true">*</span></span>
                            <input
                                type="text"
                                value={name}
                                onChange={(event) => { setName(event.target.value); clearError('name'); }}
                                required
                                maxLength={200}
                                aria-invalid={Boolean(errors.name)}
                            />
                            {errors.name && <span className="contact-us-field-error">{errors.name}</span>}
                        </label>

                        <label className={`contact-us-field${errors.email ? ' contact-us-field--invalid' : ''}`}>
                            <span>{t('get-in-touch.email')} <span className="contact-us-required" aria-hidden="true">*</span></span>
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => { setEmail(event.target.value); clearError('email'); }}
                                required
                                maxLength={320}
                                aria-invalid={Boolean(errors.email)}
                            />
                            {errors.email && <span className="contact-us-field-error">{errors.email}</span>}
                        </label>

                        <label className="contact-us-field">
                            {t('get-in-touch.company')}
                            <input
                                type="text"
                                value={company}
                                onChange={(event) => setCompany(event.target.value)}
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
