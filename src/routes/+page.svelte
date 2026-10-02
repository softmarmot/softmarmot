<script>
    import Mascot from '$lib/components/Mascot.svelte';
    import NeonButton from '$lib/components/NeonButton.svelte';
</script>

<div class="flex flex-col gap-12 py-8 md:flex-row md:gap-8 md:py-12">
    <div class="flex md:basis-1/2 flex-col gap-4">
        <h1 class="text-3xl sm:text-4xl font-medium">
            <span class="text-indigo-400">Websites</span> for businesses that want to be
            <span class="text-indigo-400">taken seriously</span>
        </h1>
        <p class="leading-relaxed text-gray-400">
            We design and build fast, modern websites and custom web applications for small businesses
            and growing companies
        </p>
        <NeonButton class="self-start" onclick={() => console.log('start')}>
            Start a project →
        </NeonButton>
    </div>
    <div class="flex md:basis-1/2 items-center justify-center">
        <!-- The SVG's viewBox has 30 units of empty padding above the drawing (~9% of its height); shift it up to compensate -->
        <Mascot class="h-72 sm:h-96 md:h-[min(26rem,60svh)] lg:h-[min(30rem,60svh)] md:translate-y-[-9%]" />
    </div>
</div>
