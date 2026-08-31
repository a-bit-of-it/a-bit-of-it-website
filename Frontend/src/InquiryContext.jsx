import { createContext, useContext, useState } from "react";

const InquiryContext = createContext(null);

export function InquiryProvider({ children }) {
    const [inquiry, setInquiry] = useState("");

    return (
        <InquiryContext.Provider value={{ inquiry, setInquiry }}>
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
