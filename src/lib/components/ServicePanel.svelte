<script lang="ts">
    import { asset } from '$app/paths';

    let {
        number,
        label,
        icon,
        title,
        description
    }: { number: string; label: string; icon: string; title: string; description: string } = $props();

    let open = $state(false);
</script>

<!--
    Front: icon + short label. Back: the full title and description.
    Flips on hover with a mouse, or on click/tap/Enter on any device (toggles).
    Both faces share one grid cell, so the panel is as tall as the longer face.
-->
<button
        type="button"
        aria-expanded={open}
        onclick={() => (open = !open)}
        class="neon-panel group flex w-full cursor-pointer flex-col gap-3 p-6 text-left"
>
    <span class="neon-number text-sm">{number}</span>

    <span class="grid flex-1">
        <span
                aria-hidden="true"
                class="col-start-1 row-start-1 flex flex-col items-center justify-center gap-3 py-4 transition duration-300
                    group-aria-expanded:-translate-y-2 group-aria-expanded:opacity-0
                    pointer-fine:group-hover:-translate-y-2 pointer-fine:group-hover:opacity-0"
        >
            <img src={asset(`/images/services/${icon}.svg`)} alt="" class="size-24 sm:size-28" />
            <span class="text-xl font-medium">{label}</span>
        </span>

        <span
                class="col-start-1 row-start-1 translate-y-2 opacity-0 transition duration-300
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

    .neon-panel {
        --neon: 129 140 248; /* indigo-400 */
        --glow: 0;

        outline: none;
        border: 1px solid
        color-mix(in srgb, rgb(199 210 254) calc(var(--glow) * 100%), rgb(255 255 255 / 0.1));
        background-color: rgb(var(--neon) / calc(0.04 * var(--glow)));
        box-shadow:
                0 0 4px rgb(var(--neon) / calc(0.8 * var(--glow))),
                0 0 12px rgb(var(--neon) / calc(0.5 * var(--glow))),
                0 0 28px rgb(var(--neon) / calc(0.25 * var(--glow))),
                inset 0 0 8px rgb(var(--neon) / calc(0.35 * var(--glow)));

        /* When the cursor leaves, the tube switches off quickly */
        transition: --glow 0.15s ease-out;
    }

    /* The number glows like NeonButton text, following the panel's --glow */
    .neon-number {
        color: color-mix(in srgb, rgb(224 231 255) calc(var(--glow) * 100%), rgb(129 140 248));
        text-shadow:
                0 0 4px rgb(var(--neon) / calc(0.9 * var(--glow))),
                0 0 12px rgb(var(--neon) / calc(0.5 * var(--glow)));
    }

    /* Lit while open (click/tap) or focused with the keyboard... */
    .neon-panel[aria-expanded='true'],
    .neon-panel:focus-visible {
        --glow: 1;
        animation:
                neon-ignite 1.1s linear,
                neon-hum 5s 1.1s linear infinite;
    }

    /* ...or hovered, only where a real hover exists */
    @media (pointer: fine) {
        .neon-panel:hover {
            --glow: 1;
            animation:
                    neon-ignite 1.1s linear,
                    neon-hum 5s 1.1s linear infinite;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .neon-panel {
            animation: none !important;
        }
    }
</style>
