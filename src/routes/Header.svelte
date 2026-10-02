<script lang="ts">
import NavItem from "$lib/components/NavItem.svelte";

// 'work' is hidden until there are projects to show
const items = ['home', 'services', 'about', 'contact'];

let menuOpen = $state(false);
</script>

<header class="relative mt-6 mb-12 lg:mt-12">
    <div class="flex justify-between items-center">
        <h1 class="text-2xl sm:text-3xl"><span class="text-indigo-400">SOFT</span>MARMOT</h1>

        <ul class="hidden lg:flex gap-8 text-lg">
            {#each items as item (item)}
                <NavItem href="#{item}">{item}</NavItem>
            {/each}
        </ul>

        <button
                type="button"
                class="lg:hidden p-2 -mr-2 text-2xl text-indigo-400 cursor-pointer"
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
                class="lg:hidden absolute inset-x-0 top-full z-10 mt-4 flex flex-col gap-4 border border-white/10 bg-slate-800 p-5 text-lg shadow-lg"
        >
            {#each items as item (item)}
                <NavItem href="#{item}" onclick={() => (menuOpen = false)}>{item}</NavItem>
            {/each}
        </ul>
    {/if}
</header>
