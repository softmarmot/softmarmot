<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLButtonAttributes } from 'svelte/elements';

    let {
        children,
        class: className = '',
        type = 'button',
        href,
        primary = false,
        ...rest
    }: HTMLButtonAttributes & { children: Snippet; href?: string; primary?: boolean } = $props();
</script>

<!-- Renders a link when `href` is given, otherwise a button.
     Bright text with a faint border; on hover the border lights up indigo and the text stays bright.
     `primary` (the main call to action) keeps a steady, non-flickering lit tube at rest that glows brighter on hover -->
<svelte:element
        this={href ? 'a' : 'button'}
        {href}
        type={href ? undefined : type}
        class="inline-block cursor-pointer border px-4 py-2.5 text-slate-100 outline-none transition duration-300
            hover:border-indigo-400 hover:text-white focus-visible:border-indigo-400 focus-visible:text-white
            {primary ? 'primary border-indigo-400' : 'border-white/15'}
            {className}"
        {...rest}
>
    {@render children()}
</svelte:element>

<style>
    .primary {
        box-shadow:
                0 0 8px rgb(129 140 248 / 0.5),
                inset 0 0 6px rgb(129 140 248 / 0.2);
    }

    .primary:hover,
    .primary:focus-visible {
        box-shadow:
                0 0 6px rgb(129 140 248 / 0.8),
                0 0 18px rgb(129 140 248 / 0.45),
                inset 0 0 8px rgb(129 140 248 / 0.3);
    }
</style>
