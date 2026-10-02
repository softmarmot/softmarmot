<script lang="ts">
    import SectionTitle from '$lib/components/SectionTitle.svelte';

    const services = [
        {
            title: 'Website Design & Development',
            description:
                'Custom-designed, mobile-friendly websites built from scratch, not bloated templates. Fast to load, easy to find on Google, and built to turn visitors into customers.'
        },
        {
            title: 'Custom Web Applications',
            description:
                'Booking systems, client portals, dashboards and internal tools tailored to the way your business actually works.'
        },
        {
            title: 'Website Redesigns',
            description:
                'Outdated or hard-to-use site? We modernize the design, structure and content so it reflects the business you are today.'
        },
        {
            title: 'Performance & Maintenance',
            description:
                'Speed optimization, security updates, backups and ongoing changes, so your site stays fast and reliable long after launch.'
        }
    ];
</script>

<section id="services" class="scroll-mt-8 py-8 md:py-12">
    <SectionTitle label="services">What we do</SectionTitle>

    <ul class="mt-10 grid gap-6 sm:grid-cols-2">
        {#each services as service, i (service.title)}
            <li class="flex flex-col gap-3 border border-white/10 p-6 transition-colors duration-300 hover:border-indigo-400/60">
                <span class="text-sm text-indigo-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 class="text-xl font-medium">{service.title}</h3>
                <p class="leading-relaxed text-gray-400">{service.description}</p>
            </li>
        {/each}
    </ul>
</section>
