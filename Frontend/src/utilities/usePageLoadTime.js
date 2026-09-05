import { useEffect, useState } from "react";

export function usePageLoadTime() {
    const [loadTimeMs, setLoadTimeMs] = useState(null);

    useEffect(() => {
        if (typeof PerformanceObserver === "undefined") return;

        const observer = new PerformanceObserver((list) => {
            const entry = list.getEntries().find((e) => e.loadEventEnd > 0);
            if (entry) {
                setLoadTimeMs(Math.round(entry.loadEventEnd));
            }
        });

        // buffered: true replays the navigation entry even if it was
        // recorded before this observer was created (page already loaded).
        observer.observe({ type: "navigation", buffered: true });

        return () => observer.disconnect();
    }, []);

    return loadTimeMs;
}
