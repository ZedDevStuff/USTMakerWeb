<script lang="ts">
    import { onMount } from "svelte";

    let div: HTMLDivElement;

    export let ratio: number = 16/9;
    export let backingResolution: { width: number, height: number } = { width: 1920, height: 1080 };
    export let scale: number = 1;

    backingResolution.width *= 1 / scale;
    backingResolution.width = Math.floor(backingResolution.width);
    backingResolution.height *= 1 / scale;
    backingResolution.height = Math.floor(backingResolution.height);

    onMount(() => {
        div.style.width = backingResolution.width + "px";
        div.style.height = backingResolution.height + "px";
        window.addEventListener("resize", (e) => {
            handleResize()
        });
        handleResize();
    });
    function handleResize() {
        let computedScale = computeScale();
        div.style.transform = `scale(${computedScale})`;
    }
    function computeScale() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let computedScale = Math.min((width / backingResolution.width), height / backingResolution.height);
        return computedScale;
    }
    export let menuDiv: HTMLDivElement;
</script>

<div style="aspect-ratio: {ratio};" bind:this={div}>
    <div class="size-full flex-col" bind:this={menuDiv}>
        <slot />
    </div>
</div>