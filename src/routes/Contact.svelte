<script lang="ts">
    import SectionTitle from '$lib/components/SectionTitle.svelte';
    import NeonButton from '$lib/components/NeonButton.svelte';

    const email = 'hello@softmarmot.com';
</script>

<section id="contact" class="scroll-mt-8 py-8 md:py-12">
    <SectionTitle label="contact">Have a project in mind?</SectionTitle>

    <p class="mt-6 max-w-2xl leading-relaxed text-gray-400">
        Tell us a little about your business and what you need. We'll get back to you with next steps
        and a rough estimate.
    </p>

    <a
            href="mailto:{email}"
            class="mt-8 inline-block break-all text-2xl sm:text-3xl text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
    >
        {email}
    </a>

    <div class="mt-8">
        <NeonButton href="mailto:{email}?subject=New%20project">Send an email →</NeonButton>
    </div>
</section>
