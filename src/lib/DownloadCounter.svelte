<script>
    import Icon from "@iconify/svelte";
    import {commas, getDownloads} from "$lib/utils.ts";
    import LazyLoad from "@dimfeld/svelte-lazyload";
    import {has} from "$lib/utils.ts";

    export let project;

    let downloads;
</script>
<style>
    .downloads {
        font-size: 1em;
        font-family: ui-rounded;
        margin-left: auto;
        line-height: 0.5em;
        padding-bottom: 0.5em;
        text-align: left;
    }
</style>
{#if has(project.modrinthId) || has(project.polymartId) || has(project.spigotId)}
    <span class="downloads">
        <Icon icon="bx:download" alt="Download count"/>
        {#await downloads}
            <Icon icon="eos-icons:loading" alt="Loading"/>&nbsp;
        {:then number}
            {commas(number)}
        {:catch error}
            <Icon icon="icon-park-solid:caution" alt="Error"/>
            {@debug error}
        {/await}
        <LazyLoad height="0" on:visible={() => downloads = getDownloads(project)}/>
    </span>
{:else}
    &nbsp;
{/if}