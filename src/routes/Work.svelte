<script lang="ts">
    import SectionTitle from '$lib/components/SectionTitle.svelte';
    import WorkCard from '$lib/components/WorkCard.svelte';

    import repair from '$lib/assets/work/repair.svg?raw';
    import trucking from '$lib/assets/work/trucking.svg?raw';
    import delivery from '$lib/assets/work/delivery.svg?raw';

    const projects = [
        {
            name: 'Hartville Electronics Repair',
            kind: 'Electronics repair shop',
            url: 'https://hartvilleelectronicsrepair.com/',
            icon: repair,
            description:
                'A fast, mobile-friendly site for a local repair shop, so customers can see what gets fixed and get in touch quickly.'
        },
        {
            name: 'WDM Express',
            kind: 'Trucking company',
            url: 'https://wdm.express/',
            icon: trucking,
            description:
                'A company website for a freight carrier that presents the business clearly to shippers and brokers.'
        },
        {
            name: 'First Class Delivery',
            kind: 'Trucking company',
            url: 'https://1stclass.delivery/',
            icon: delivery,
            description:
                'A modern site for a trucking company that shows shippers what it hauls and makes it easy to request a load.'
        }
    ];
</script>

<section id="work" class="scroll-mt-8 py-8 md:py-12">
    <SectionTitle label="work">Sites we've built</SectionTitle>

    <ul class="mt-10 grid gap-6 lg:grid-cols-3">
        {#each projects as project, i (project.url)}
            <li class="flex">
                <WorkCard number={String(i + 1).padStart(2, '0')} {...project} />
            </li>
        {/each}
    </ul>
</section>
