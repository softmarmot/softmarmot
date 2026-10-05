<script lang="ts">
import { fade, slide } from 'svelte/transition';
import NavItem from "$lib/components/NavItem.svelte";

// 'work' is hidden until there are projects to show
const items = ['home', 'services', 'about', 'contact'];

let menuOpen = $state(false);

// Skip the open/close transitions for people who prefer reduced motion
const motion = (ms: number) =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : ms;
</script>

<header class="sticky top-0 z-20 mt-2 mb-12 border-b border-white/10 bg-slate-800 py-4 lg:mt-6 lg:py-6">
    <div class="flex justify-between items-center">
        <h1 class="text-2xl sm:text-3xl"><span class="text-indigo-400">SOFT</span>MARMOT</h1>

        <ul class="hidden lg:flex gap-8 text-lg">
            {#each items as item (item)}
                <NavItem href="#{item}">{item}</NavItem>
            {/each}
        </ul>

        <button
                type="button"
                class="menu-toggle lg:hidden p-2 -mr-2 text-2xl text-indigo-400 cursor-pointer"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onclick={() => (menuOpen = !menuOpen)}
        >
            {menuOpen ? '✕' : '☰'}
        </button>
    </div>

    {#if menuOpen}
        <ul
                id="mobile-nav"
                class="mobile-nav lg:hidden absolute inset-x-0 top-full z-10 -mt-px flex flex-col gap-4 bg-slate-800 p-5 text-lg shadow-lg"
                in:slide={{ duration: motion(250) }}
                out:fade={{ duration: motion(150) }}
        >
            {#each items as item (item)}
                <NavItem href="#{item}" onclick={() => (menuOpen = false)}>{item}</NavItem>
            {/each}
        </ul>
    {/if}
</header>

<style>
    /*
        Mobile menu: the panel drops down and its border ignites like a neon tube,
        then the items slide in one after another.
        --glow, neon-ignite and neon-hum live in $lib/neon.css
    */
    .mobile-nav {
        --neon: 129 140 248; /* indigo-400 */

        border: 1px solid
        color-mix(in srgb, rgb(199 210 254) calc(var(--glow) * 100%), rgb(255 255 255 / 0.1));
        box-shadow:
                0 0 4px rgb(var(--neon) / calc(0.6 * var(--glow))),
                0 0 16px rgb(var(--neon) / calc(0.3 * var(--glow))),
                inset 0 0 8px rgb(var(--neon) / calc(0.2 * var(--glow)));
        animation:
                neon-ignite 1.1s linear both,
                neon-hum 5s 1.1s linear infinite;
    }

    .mobile-nav :global(li) {
        animation: nav-item-in 0.3s ease-out both;
    }

    .mobile-nav :global(li:nth-child(1)) { animation-delay: 0.15s; }
    .mobile-nav :global(li:nth-child(2)) { animation-delay: 0.25s; }
    .mobile-nav :global(li:nth-child(3)) { animation-delay: 0.35s; }
    .mobile-nav :global(li:nth-child(4)) { animation-delay: 0.45s; }
    .mobile-nav :global(li:nth-child(5)) { animation-delay: 0.55s; }

    @keyframes nav-item-in {
        from {
            opacity: 0;
            transform: translateX(-0.5rem);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }

    /* The burger/close icon glows while the menu is open */
    .menu-toggle {
        transition: text-shadow 0.3s;
    }

    .menu-toggle[aria-expanded='true'] {
        text-shadow:
                0 0 4px rgb(129 140 248 / 0.9),
                0 0 12px rgb(129 140 248 / 0.5);
    }

    @media (prefers-reduced-motion: reduce) {
        .mobile-nav {
            --glow: 1;
            animation: none;
        }

        .mobile-nav :global(li) {
            animation: none;
        }
    }
</style>
