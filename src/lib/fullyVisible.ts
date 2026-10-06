// The sticky header covers the top of the viewport, so anything under it doesn't count as visible
const HEADER_HEIGHT = 84;

/**
 * Svelte attachment: calls `onVisible` once, the first time the element is fully on screen
 * below the sticky header (or fills the whole viewport, if it is taller than the viewport).
 */
export function fullyVisible(onVisible: () => void) {
    return (node: Element) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const visible = entry.intersectionRect.height;
                const viewport = entry.rootBounds?.height ?? window.innerHeight;
                if (visible >= Math.min(entry.boundingClientRect.height, viewport) - 1) {
                    onVisible();
                    observer.disconnect();
                }
            },
            {
                rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
                threshold: Array.from({ length: 21 }, (_, i) => i / 20)
            }
        );
        observer.observe(node);
        return () => observer.disconnect();
    };
}
