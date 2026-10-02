<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

    import Header from './Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen w-8/12 mx-auto">
        <Header />
        <main>{@render children()}</main>
        <footer>
            <p>footer</p>
        </footer>
</div>