<script lang="ts">
    let {
        number,
        name,
        kind,
        url,
        image,
        description
    }: { number: string; name: string; kind: string; url: string; image: string; description: string } = $props();

    const domain = $derived(new URL(url).hostname);
</script>

<!--
    The whole card is one link to the live site.
    Top: a browser window showing the site's address and a screenshot of the homepage.
    Bottom: name, kind of business and a short description.
    Stacked on phones and in the 3-column grid; side by side on tablet widths, where the card is a full-width row.
-->
<a
        href={url}
        target="_blank"
        rel="noopener"
        class="group flex h-full w-full flex-col border border-white/10 outline-none transition-colors duration-300
            hover:border-indigo-400/60 focus-visible:border-indigo-400/60 sm:max-lg:flex-row"
>
    <span
            aria-hidden="true"
            class="flex flex-col border-b border-white/10 transition-colors duration-300
                group-hover:border-indigo-400/60 group-focus-visible:border-indigo-400/60
                sm:max-lg:basis-1/2 sm:max-lg:border-r sm:max-lg:border-b-0"
    >
        <span class="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
            <span class="flex shrink-0 gap-1.5">
                <span class="size-2 rounded-full border border-white/25"></span>
                <span class="size-2 rounded-full border border-white/25"></span>
                <span class="size-2 rounded-full border border-white/25"></span>
            </span>
            <span class="truncate text-xs text-gray-500">{domain}</span>
        </span>

        <img
                src={image}
                alt=""
                width="1200"
                height="750"
                loading="lazy"
                decoding="async"
                class="block aspect-[16/10] w-full object-cover object-top opacity-80 transition-opacity duration-300
                    group-hover:opacity-100 group-focus-visible:opacity-100 sm:max-lg:aspect-auto sm:max-lg:min-h-0 sm:max-lg:flex-1"
        />
    </span>

    <span class="flex flex-1 flex-col gap-2 p-6 sm:max-lg:basis-1/2">
        <span aria-hidden="true" class="text-sm text-indigo-400">{number}</span>
        <span class="text-xl font-medium">{name}</span>
        <span class="text-sm text-gray-500">{kind}</span>
        <span class="mt-2 leading-relaxed text-gray-400">{description}</span>
        <span class="mt-auto pt-4 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">
            Visit site
            <span
                    aria-hidden="true"
                    class="inline-block transition-transform duration-300
                        pointer-fine:group-hover:translate-x-0.5 pointer-fine:group-hover:-translate-y-0.5"
            >↗</span>
            <span class="sr-only">(opens in a new tab)</span>
        </span>
    </span>
</a>
