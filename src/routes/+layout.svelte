<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';

    import Header from './Header.svelte';
    import Footer from "./Footer.svelte";

    let {children} = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon}/>
</svelte:head>

<div class="min-h-screen flex flex-col w-8/12 mx-auto">
    <Header/>
    <main class="flex-1">{@render children()}</main>
    <Footer/>
</div>