<script lang="ts">
    import type { Snippet } from 'svelte';

    let { label, children }: { label: string; children: Snippet } = $props();
</script>

<p class="text-lg text-gray-400"><span class="text-indigo-400 text-2xl">#</span> {label}</p>
<h2 class="mt-2 text-2xl sm:text-3xl font-medium">{@render children()}</h2>
