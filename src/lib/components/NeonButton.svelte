<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLButtonAttributes } from 'svelte/elements';

    let {
        children,
        class: className = '',
        type = 'button',
        href,
        arrow = false,
        ...rest
    }: HTMLButtonAttributes & { children: Snippet; href?: string; arrow?: boolean } = $props();
</script>

<!-- Renders a link when `href` is given, otherwise a button.
     Bright text and a faint border by default; on hover the text dims and the border turns indigo.
     With `arrow`, a neon → follows the label and flickers on like the service panel numbers -->
<svelte:element
        this={href ? 'a' : 'button'}
        {href}
        type={href ? undefined : type}
        class="neon-button inline-block cursor-pointer border border-white/10 px-4 py-2 text-slate-100 outline-none transition-colors duration-300
            hover:border-indigo-400/60 hover:text-gray-400 focus-visible:border-indigo-400/60 focus-visible:text-gray-400
            {className}"
        {...rest}
>
    {@render children()}{#if arrow}<span class="neon-arrow" aria-hidden="true">→</span>{/if}
</svelte:element>

<style>
    /* --glow, neon-ignite and neon-hum live in $lib/neon.css; same look as ServicePanel's .neon-number */
    .neon-arrow {
        --neon: 129 140 248; /* indigo-400 */
        --glow: 0;
        margin-inline-start: 1ch;
        color: color-mix(in srgb, rgb(224 231 255) calc(var(--glow) * 100%), rgb(129 140 248));
        text-shadow:
                0 0 4px rgb(var(--neon) / calc(0.9 * var(--glow))),
                0 0 12px rgb(var(--neon) / calc(0.5 * var(--glow)));
        transition: --glow 0.15s ease-out;
    }

    /* Lights up on hover/focus; on touch screens, where there is no hover, it stays lit */
    .neon-button:focus-visible .neon-arrow {
        --glow: 1;
        animation:
                neon-ignite 1.1s linear,
                neon-hum 5s 1.1s linear infinite;
    }

    @media (pointer: fine) {
        .neon-button:hover .neon-arrow {
            --glow: 1;
            animation:
                    neon-ignite 1.1s linear,
                    neon-hum 5s 1.1s linear infinite;
        }
    }

    @media (pointer: coarse) {
        .neon-arrow {
            --glow: 1;
            animation:
                    neon-ignite 1.1s linear,
                    neon-hum 5s 1.1s linear infinite;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .neon-arrow {
            animation: none !important;
        }
    }
</style>
