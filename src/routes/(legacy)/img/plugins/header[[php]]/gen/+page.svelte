<script>

    import { clipboard } from '@skeletonlabs/skeleton';
    import {page} from "$app/stores";

    let text = "Default text";

    $: url = new URL("../header?text=" + encodeURIComponent(text), $page.url)
</script>
<div class="text-center">
    <input class="input" bind:value={text}>
    <br>
    <br>
    <img alt="{text}" src="../header?text={encodeURIComponent(text)}&shortcache"/>
    <br>
    <br>
    <button class="btn variant-glass-primary" use:clipboard={url}>Copy URL</button>
</div>


<style>
    img {
        max-width: 100vw;
    }
</style>