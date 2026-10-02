<script lang="ts">
    import { asset } from '$app/paths';

    let { class: className = '' } = $props();
</script>

<object
        data={asset('/images/sm_full_mascot.svg')}
        class="block w-auto max-w-full aspect-[230/340] overflow-visible {className}"
        type="image/svg+xml"
        aria-label="SoftMarmot mascot"
></object>
