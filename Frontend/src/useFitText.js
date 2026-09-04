import { useLayoutEffect, useRef } from "react";

const MIN_FONT_SIZE_PX = 12;

export function useFitText(minFontSize = MIN_FONT_SIZE_PX) {
    const ref = useRef(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        function fit() {
            el.style.fontSize = "";
            let fontSize = parseFloat(getComputedStyle(el).fontSize);
            while (el.scrollWidth > el.clientWidth && fontSize > minFontSize) {
                fontSize -= 1;
                el.style.fontSize = `${fontSize}px`;
            }
        }

        fit();
        const observer = new ResizeObserver(fit);
        observer.observe(el);
        return () => observer.disconnect();
    }, [minFontSize]);

    return ref;
}
