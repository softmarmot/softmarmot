<script>
    let {
        isActive = false,
        children,
        ...restAttrs // Catches any extra attributes like class, id, or data-*
    } = $props();
</script>

<li class="flex gap-2 items-center hover:cursor-pointer hover:text-gray-400 transition-colors duration-300" class:active={isActive} {...restAttrs}>
    <span class="text-indigo-400 text-2xl">#</span>
    <span>{@render children?.()}</span>
</li>
