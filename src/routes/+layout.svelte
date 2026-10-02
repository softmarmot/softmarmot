<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.ico';

    import Header from './Header.svelte';
    import Footer from "./Footer.svelte";

    let {children} = $props();
</script>

<svelte:head>
    <title>SoftMarmot LLC</title>
    <link rel="icon" href={favicon}/>
</svelte:head>

<div class="min-h-dvh flex flex-col w-full px-5 sm:px-8 xl:w-8/12 xl:px-0 mx-auto">
    <Header/>
    <main class="flex-1">{@render children()}</main>
    <Footer/>
</div>