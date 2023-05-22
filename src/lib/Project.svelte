<script>

    import Icon from '@iconify/svelte';
    import Button from '$lib/Button.svelte';
    import LazyLoad from '@dimfeld/svelte-lazyload';
    import {has} from "$lib/utils.ts";
    import DownloadCounter from "$lib/DownloadCounter.svelte";
    import Tag from "$lib/Tag.svelte";
    import {capitalize} from "$lib/utils";

    export let project;
</script>

<style>
    img {
        height: 1em;
    }

    .outer {
        font-size: 1.05em;
        display: inline-block;
        border-style: solid;
        border-color: goldenrod;
        padding: 0.75em;
        border-radius: 0.5em;

        width: min(400px, 98vw);
        min-width: 250px !important;

        margin: 0.25em;
    }
    @media (orientation: portrait) {
        .outer {
            width: 80vw;
        }
    }

    .title {
        text-align: left;
        display: block;
        font-size: 1.35em;
    }

    .icon {
        text-align: right;
        display: block;
        position: relative;
        top: -1.45em;
        right: -0.1em;
        height: 0;
    }
    .icon > img {
        height: 1.5em;
        border-radius: 0.15em;
        width: auto;
    }

    .description {
        text-align: center;
        display: block;
        min-height: 3em;
    }

    .downloads {
        display: block;
        min-height: 1.5em;
    }

    .icons {
        font-size: 1.5em;
        text-align: left;
        display: block;
        min-height: 1em;
    }

    .docs {
        text-align: right;
        display: block;
        position: relative;
        top: -1.25em;
        right: 0.25em;
        height: 0;
    }

    a {
        color: inherit;
    }
</style>

<div class="outer card">
    <span class="title">
        <a href="/project/{project.name}">{project.name}</a>
        <LazyLoad height="0">
            <span class="icon">
                {#if has(project.icon)}
                    <img src={project.icon} alt="{project.name} icon">
                {/if}
            </span>
        </LazyLoad>
        <noscript>
            <span class="icon">
                {#if has(project.icon)}
                    <img src={project.icon} alt="{project.name} icon">
                {/if}
            </span>
        </noscript>
    </span>

    <hr>

    <span class="description">
        {project.description}
    </span>

    <span class="downloads">
        <DownloadCounter {project}/>
    </span>

    {#each project.tags as tag}
        <Tag><a href="/tag/{tag}">{capitalize(tag.replaceAll("-", " "))}</a></Tag>
        <span></span>
    {/each}

    <span class="icons mt-2">
        {#if has(project.modrinthId)}
            <a
                    href="https://modrinth.com/plugin/{project.modrinthId}"
                    target="_blank"
                    aria-label="Link to {project.name} on Modrinth"
                    title="Link to {project.name} on Modrinth"
            >
                <img src="/img/modrinth.webp" alt="Link to {project.name} on Modrinth">
            </a>
        {/if}

        {#if has(project.polymartId)}
            <a
                    href="https://polymart.org/resource/{project.polymartId}"
                    target="_blank"
                    aria-label="Link to {project.name} on Polymart"
                    title="Link to {project.name} on Polymart"
            >
                <img src="https://polymart.org/style/logo_96.png" alt="Link to {project.name} on Polymart">
            </a>
        {/if}

        {#if has(project.spigotId)}
            <a
                    href="https://spigotmc.org/resources/{project.spigotId}"
                    target="_blank"
                    aria-label="Link to {project.name} on Spigot"
                    title="Link to {project.name} on Spigot"
            >
                <img src="/img/spigot.webp" alt="Link to {project.name} on Spigot">
            </a>
        {/if}

        {#if has(project.github) || has(project.gitlab)}
            <a
                    href="https://{project.github ? 'github' : 'gitlab'}.com/{project.github ? project.github : project.gitlab}"
                    target="_blank"
                    aria-label="Link to the source code for {project.name}"
                    title="Link to the source code for {project.name}"
            >
                <Icon icon="carbon:code" alt="Link to {project.name} on {project.github ? 'GitHub' : 'GitLab'}"/>
            </a>
        {/if}

        {#if has(project.webpage)}
            <a
                    href="{project.webpage}"
                    target="_blank"
                    aria-label="Link to the webpage for {project.name}"
                    title="Link to the webpage for {project.name}"
            >
                <Icon icon="mdi:web" alt="Link to {project.name}"/>
            </a>
        {/if}

        <span class="docs">
            {#if has(project.docs)}
                <Button href="https://wiki.ajg0702.us/{project.docs}" target="_blank"  aria_label="Link to {project.name}'s docs">Docs</Button>
            {:else}
                &nbsp;
            {/if}
        </span>

    </span>
</div>