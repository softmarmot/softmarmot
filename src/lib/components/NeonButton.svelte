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

<!-- Renders a link when `href` is given, otherwise a button.
     Bright text and a faint border by default; on hover the text dims and the border turns indigo -->
<svelte:element
        this={href ? 'a' : 'button'}
        {href}
        type={href ? undefined : type}
        class="inline-block cursor-pointer border border-white/10 px-4 py-2 text-slate-100 outline-none transition-colors duration-300
            hover:border-indigo-400/60 hover:text-gray-400 focus-visible:border-indigo-400/60 focus-visible:text-gray-400
            {className}"
        {...rest}
>
    {@render children()}
</svelte:element>
