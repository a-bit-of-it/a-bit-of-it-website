import { useEffect, useRef, useState } from "react";

const REVEAL_AT_TOP_PX = 80;
const DIRECTION_THRESHOLD_PX = 8;

export function useHideOnScroll() {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            if (currentScrollY < REVEAL_AT_TOP_PX) {
                setHidden(false);
            } else if (delta > DIRECTION_THRESHOLD_PX) {
                setHidden(true);
            } else if (delta < -DIRECTION_THRESHOLD_PX) {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return hidden;
}
