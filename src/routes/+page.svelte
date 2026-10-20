<script>
    import Mascot from '$lib/components/Mascot.svelte';
    import NeonButton from '$lib/components/NeonButton.svelte';
    import Services from './Services.svelte';
    import Work from './Work.svelte';
    import About from './About.svelte';
    import Contact from './Contact.svelte';
</script>

<section id="home" class="scroll-mt-8 flex flex-col gap-10 py-8 md:flex-row md:gap-8 md:py-12">
    <div class="flex md:basis-1/2 flex-col gap-8 md:gap-6 justify-between">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl leading-tight font-medium">
            <span class="text-indigo-400">Websites</span> for businesses that want to be
            <span class="text-indigo-400">taken seriously</span>
        </h1>
        <p class="max-w-[60ch] font-plex leading-relaxed text-slate-300 md:text-lg">
            We design and build fast, modern websites and custom web applications for small businesses
            and growing companies
        </p>
        <NeonButton primary class="self-start" href="#contact">
            Start a project →
        </NeonButton>
    </div>
    <div class="flex md:basis-1/2 items-center justify-center">
        <!-- The SVG's viewBox has 30 units of empty padding above and below the drawing (~9% of its height each);
             negative margins trim that padding from the layout so it doesn't add extra space -->
        <Mascot
                class="h-(--h) [--h:14rem] sm:[--h:24rem] md:[--h:min(26rem,60svh)] lg:[--h:min(30rem,60svh)] md:my-[calc(var(--h)*-0.09)]"
        />
    </div>
</section>

<Services />
<Work />
<About />
<Contact />
