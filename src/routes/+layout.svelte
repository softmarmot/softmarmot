<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.ico';

    import Header from './Header.svelte';
    import Footer from "./Footer.svelte";

    let {children} = $props();

    const description =
        'SoftMarmot designs and builds fast, modern websites and custom web applications for small businesses in Parma, Ohio and beyond.';
</script>

<svelte:head>
    <title>SoftMarmot LLC</title>
    <link rel="icon" href={favicon}/>
    <meta name="description" content={description}/>
    <meta name="theme-color" content="#1d293d"/>
    <!-- Link previews (Facebook, iMessage, Slack, LinkedIn) -->
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="SoftMarmot"/>
    <meta property="og:title" content="SoftMarmot · Websites for businesses that want to be taken seriously"/>
    <meta property="og:description" content={description}/>
    <meta property="og:url" content="https://softmarmot.com/"/>
    <meta property="og:image" content="https://softmarmot.com/images/og-image.png"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta name="twitter:card" content="summary_large_image"/>
</svelte:head>

<div class="min-h-dvh flex flex-col w-full px-5 sm:px-8 xl:w-8/12 xl:px-0 mx-auto">
    <Header/>
    <main class="flex-1">{@render children()}</main>
    <Footer/>
</div>