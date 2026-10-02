<script>
    import Mascot from '$lib/components/Mascot.svelte';
    import NeonButton from '$lib/components/NeonButton.svelte';
</script>

<div class="flex flex-row py-24">
    <div class="flex basis-1/2 flex-col gap-4">
        <h1 class="text-4xl font-medium">
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
    <div class="flex basis-1/2 justify-end">
        <Mascot />
    </div>
</div>