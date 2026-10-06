<script lang="ts">
    import { asset } from '$app/paths';
    import { fullyVisible } from '$lib/fullyVisible';

    let { class: className = '' } = $props();

    let object: HTMLObjectElement;
    let visible = false;

    // The SVG runs its own power-on sequence as CSS animations. Until the mascot is fully on screen,
    // hold them all at their first frame (every tube dark), then let them play from the start.
    function sync() {
        const svg = object?.contentDocument;
        if (svg?.documentElement?.tagName !== 'svg') return; // not loaded yet
        for (const animation of svg.getAnimations()) {
            if (visible) {
                animation.play();
            } else {
                animation.pause();
                animation.currentTime = 0;
            }
        }
    }

    $effect(() => {
        sync(); // in case the SVG loaded before this component hydrated
    });
</script>

<object
        bind:this={object}
        data={asset('/images/sm_full_mascot.svg')}
        class="block w-auto max-w-full aspect-[230/340] overflow-visible {className}"
        type="image/svg+xml"
        aria-label="SoftMarmot mascot"
        onload={sync}
        {@attach fullyVisible(() => {
            visible = true;
            sync();
        })}
></object>
