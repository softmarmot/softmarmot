<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLButtonAttributes } from 'svelte/elements';

    let {
        children,
        class: className = '',
        type = 'button',
        ...rest
    }: HTMLButtonAttributes & { children: Snippet } = $props();
</script>

<button {type} class="neon-button cursor-pointer px-4 py-2 {className}" {...rest}>
    {@render children()}
</button>

<style>
    /* Registering the variable lets the browser animate it as a number */
    @property --glow {
        syntax: '<number>';
        inherits: true;
        initial-value: 0;
    }

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

    /* Start-up sequence: sharp flashes with dark gaps of uneven length */
    @keyframes neon-ignite {
        0%   { --glow: 0; }
        4%   { --glow: 0.9; }
        5%   { --glow: 0.05; }
        13%  { --glow: 0.05; }
        14%  { --glow: 1; }
        18%  { --glow: 1; }
        19%  { --glow: 0.15; }
        21%  { --glow: 0.6; }
        22%  { --glow: 0; }
        36%  { --glow: 0; }
        38%  { --glow: 1; }
        100% { --glow: 1; }
    }

    /* Once lit: a steady glow with a rare, tiny dip */
    @keyframes neon-hum {
        0%, 61%, 63.5%, 100% { --glow: 1; }
        62%   { --glow: 0.82; }
        63%   { --glow: 0.95; }
        85%   { --glow: 0.97; }
    }

    @media (prefers-reduced-motion: reduce) {
        .neon-button:hover,
        .neon-button:focus-visible {
            animation: none;
        }
    }
</style>