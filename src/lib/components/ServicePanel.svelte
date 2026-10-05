<script lang="ts">
    let {
        number,
        label,
        icon,
        title,
        description
    }: { number: string; label: string; icon: string; title: string; description: string } = $props();

    let open = $state(false);
    // Becomes true the first time the panel scrolls into view; that is when the icon first lights up
    let seen = $state(false);

    function revealOnScroll(node: HTMLElement) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    seen = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }
</script>

<!--
    Front: neon icon + short label. Back: the full title and description.
    Flips on hover with a mouse, or on click/tap/Enter on any device (toggles).
    When flipped, the icon's tubes switch off and stay visible behind the text;
    when it flips back, they flicker on again.
    Both faces share one grid cell, so the panel is as tall as the longer face.
-->
<button
        type="button"
        aria-expanded={open}
        onclick={() => (open = !open)}
        class="panel group flex w-full cursor-pointer flex-col gap-3 border border-white/10 p-6 text-left outline-none transition-colors duration-300
            hover:border-indigo-400/60 focus-visible:border-indigo-400/60 aria-expanded:border-indigo-400/60"
        class:seen
        {@attach revealOnScroll}
>
    <span class="neon-number text-sm">{number}</span>

    <span class="grid flex-1">
        <span
                aria-hidden="true"
                class="col-start-1 row-start-1 flex flex-col items-center justify-center gap-3 py-4"
        >
            <span class="neon-icon size-24 sm:size-28">{@html icon}</span>
            <span
                    class="text-xl font-medium transition duration-300
                        group-aria-expanded:-translate-y-2 group-aria-expanded:opacity-0
                        pointer-fine:group-hover:-translate-y-2 pointer-fine:group-hover:opacity-0"
            >
                {label}
            </span>
        </span>

        <span
                class="relative col-start-1 row-start-1 translate-y-2 opacity-0 transition duration-300
                    group-aria-expanded:translate-y-0 group-aria-expanded:opacity-100
                    pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:opacity-100"
        >
            <span class="block text-xl font-medium">{title}</span>
            <span class="mt-3 block leading-relaxed text-gray-400">{description}</span>
        </span>
    </span>
</button>

<style>
    /* --glow, neon-ignite and neon-hum live in $lib/neon.css */

    .panel {
        --neon: 129 140 248; /* indigo-400 */
    }

    /*
        Icon tubes: stroke goes from unlit glass (slate-600) to white as --glow rises.
        The SVG's own filter only blooms bright strokes, so unlit tubes cast no halo.
    */
    .neon-icon {
        --glow: 0;
        display: block;
        transition: --glow 0.15s ease-out;
    }

    .neon-icon :global(svg) {
        width: 100%;
        height: 100%;
    }

    .neon-icon :global(svg > g) {
        stroke: color-mix(in srgb, rgb(255 255 255) calc(var(--glow) * 100%), rgb(71 85 105));
    }

    /* First time in view, and every time the text is hidden again: flicker on */
    .panel.seen .neon-icon {
        --glow: 1;
        animation:
                neon-ignite 1.1s linear,
                neon-hum 5s 1.1s linear infinite;
    }

    /* Text showing: tubes switch off (hover only where a real hover exists) */
    .panel.seen[aria-expanded='true'] .neon-icon {
        --glow: 0;
        animation: none;
    }

    @media (pointer: fine) {
        .panel.seen:hover .neon-icon {
            --glow: 0;
            animation: none;
        }
    }

    /* The number lights up while the text is showing */
    .neon-number {
        --glow: 0;
        color: color-mix(in srgb, rgb(224 231 255) calc(var(--glow) * 100%), rgb(129 140 248));
        text-shadow:
                0 0 4px rgb(var(--neon) / calc(0.9 * var(--glow))),
                0 0 12px rgb(var(--neon) / calc(0.5 * var(--glow)));
        transition: --glow 0.15s ease-out;
    }

    .panel[aria-expanded='true'] .neon-number,
    .panel:focus-visible .neon-number {
        --glow: 1;
        animation:
                neon-ignite 1.1s linear,
                neon-hum 5s 1.1s linear infinite;
    }

    @media (pointer: fine) {
        .panel:hover .neon-number {
            --glow: 1;
            animation:
                    neon-ignite 1.1s linear,
                    neon-hum 5s 1.1s linear infinite;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .neon-icon,
        .neon-number {
            animation: none !important;
        }
    }
</style>
