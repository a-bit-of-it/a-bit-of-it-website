import { createContext, useCallback, useContext, useRef, useState } from "react";

const InquiryContext = createContext(null);

export function InquiryProvider({ children }) {
    const [inquiry, setInquiry] = useState("");
    const inquiryRef = useRef(null);

    // When called, this inputs a default "inquiry template" into our get in touch section
    // It also auto-selects the input field, such that the user is ready to type without manually focusing on the textarea
    const selectInquiry = useCallback((value) => {
        setInquiry(value);
        const node = inquiryRef.current;
        node?.focus({ preventScroll: true });
        node?.select();
    }, []);

    return (
        <InquiryContext.Provider value={{ inquiry, setInquiry, selectInquiry, inquiryRef }}>
            {children}
        </InquiryContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook lives alongside its provider intentionally
export function useInquiry() {
    const context = useContext(InquiryContext);
    if (!context) {
        throw new Error("useInquiry must be used within an InquiryProvider");
    }
    return context;
}
