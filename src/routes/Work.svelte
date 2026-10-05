<script lang="ts">
    import SectionTitle from '$lib/components/SectionTitle.svelte';
    import WorkCard from '$lib/components/WorkCard.svelte';

    import hartville from '$lib/assets/work/hartville.webp';
    import wdm from '$lib/assets/work/wdm.webp';
    import firstClass from '$lib/assets/work/1stclass.webp';

    const projects = [
        {
            name: 'Hartville Electronics Repair',
            kind: 'Electronics repair shop',
            url: 'https://hartvilleelectronicsrepair.com/',
            image: hartville,
            description:
                'A clean, photo-led site for a local shop that repairs phones, tablets, laptops and gaming consoles, with every service a tap away.'
        },
        {
            name: 'WDM Express',
            kind: 'Trucking company',
            url: 'https://wdm.express/',
            image: wdm,
            description:
                'A dark, cinematic one-pager for a box-truck carrier serving the USA and Canada, covering its fleet, drivers, routes and careers.'
        },
        {
            name: 'First Class Delivery',
            kind: 'Trucking company',
            url: 'https://1stclass.delivery/',
            image: firstClass,
            description:
                'A bright, road-themed site for a carrier running routes across North America, introducing its fleet and hiring drivers.'
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
