<script lang="ts">
    import SectionTitle from '$lib/components/SectionTitle.svelte';
    import ServicePanel from '$lib/components/ServicePanel.svelte';

    // Icons are inlined (not <img>) so ServicePanel can switch their tubes on and off with CSS
    import websites from '$lib/assets/services/websites.svg?raw';
    import webApps from '$lib/assets/services/web-apps.svg?raw';
    import redesigns from '$lib/assets/services/redesigns.svg?raw';
    import performance from '$lib/assets/services/performance.svg?raw';

    const services = [
        {
            label: 'Websites',
            icon: websites,
            title: 'Website Design & Development',
            description:
                'Custom-designed, mobile-friendly websites built from scratch, not bloated templates. Fast to load, easy to find on Google, and built to turn visitors into customers.'
        },
        {
            label: 'Web Apps',
            icon: webApps,
            title: 'Custom Web Applications',
            description:
                'Booking systems, client portals, dashboards and internal tools tailored to the way your business actually works.'
        },
        {
            label: 'Redesigns',
            icon: redesigns,
            title: 'Website Redesigns',
            description:
                'Outdated or hard-to-use site? We modernize the design, structure and content so it reflects the business you are today.'
        },
        {
            label: 'Speed & Care',
            icon: performance,
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
            <li class="flex">
                <ServicePanel number={String(i + 1).padStart(2, '0')} {...service} />
            </li>
        {/each}
    </ul>
</section>
