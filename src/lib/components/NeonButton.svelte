<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLButtonAttributes } from 'svelte/elements';

    let {
        children,
        class: className = '',
        type = 'button',
        href,
        ...rest
    }: HTMLButtonAttributes & { children: Snippet; href?: string } = $props();
</script>

<!-- Renders a link when `href` is given, otherwise a button -->
<svelte:element
        this={href ? 'a' : 'button'}
        {href}
        type={href ? undefined : type}
        class="neon-button inline-block cursor-pointer px-4 py-2 {className}"
        {...rest}
>
    {@render children()}
</svelte:element>

<style>
    /* --glow, neon-ignite and neon-hum live in $lib/neon.css */

    .neon-button {
        --neon: 129 140 248; /* indigo-400 */
        --glow: 0;

        border: 1px solid
        color-mix(in srgb, rgb(199 210 254) calc(var(--glow) * 100%), rgb(156 163 175));
        color: color-mix(in srgb, rgb(224 231 255) calc(var(--glow) * 100%), rgb(156 163 175));
        background-color: rgb(var(--neon) / calc(0.08 * var(--glow)));
        box-shadow:
                0 0 4px rgb(var(--neon) / calc(0.8 * var(--glow))),
                0 0 12px rgb(var(--neon) / calc(0.5 * var(--glow))),
                0 0 28px rgb(var(--neon) / calc(0.25 * var(--glow))),
                inset 0 0 8px rgb(var(--neon) / calc(0.35 * var(--glow)));
        text-shadow:
                0 0 4px rgb(var(--neon) / calc(0.9 * var(--glow))),
                0 0 12px rgb(var(--neon) / calc(0.5 * var(--glow)));

        /* When the cursor leaves, the tube switches off quickly */
        transition: --glow 0.15s ease-out;
    }

    .neon-button:hover,
    .neon-button:focus-visible {
        outline: none;
        --glow: 1;
        animation:
                neon-ignite 1.1s linear,
                neon-hum 5s 1.1s linear infinite;
    }

    @media (prefers-reduced-motion: reduce) {
        .neon-button:hover,
        .neon-button:focus-visible {
            animation: none;
        }
    }
</style>