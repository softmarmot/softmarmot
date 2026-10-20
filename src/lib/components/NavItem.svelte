<script>
    let {
        href,
        isActive = false,
        children,
        ...restAttrs // Catches any extra attributes like class, id, or data-*
    } = $props();
</script>

<li class:active={isActive} {...restAttrs}>
    <a {href} class="flex gap-2 items-center hover:text-indigo-300 focus-visible:text-indigo-300 transition-colors duration-300">
        <span class="text-indigo-400 text-2xl">#</span>
        <span>{@render children?.()}</span>
    </a>
</li>
