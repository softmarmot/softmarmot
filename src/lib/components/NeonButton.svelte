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
        class="inline-block cursor-pointer border border-white/10 px-4 py-2 text-gray-400 outline-none transition-colors duration-300
            hover:border-indigo-400/60 hover:text-slate-100 focus-visible:border-indigo-400/60 focus-visible:text-slate-100
            pointer-coarse:border-indigo-400/60 pointer-coarse:text-slate-100
            {className}"
        {...rest}
>
    {@render children()}
</svelte:element>
