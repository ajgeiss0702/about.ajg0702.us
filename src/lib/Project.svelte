<script>

    import Icon from '@iconify/svelte';
    import Button from '$lib/Button.svelte';
    import LazyLoad from '@dimfeld/svelte-lazyload';
    import {has} from "$lib/utils.ts";
    import DownloadCounter from "$lib/DownloadCounter.svelte";

    export let project;

    let downloads = new Promise(() => {});
</script>

<style>
    img {
        height: 1em;
    }

    .outer {
        display: inline-block;
        border-style: solid;
        border-color: goldenrod;
        padding: 0.5em;
        border-radius: 0.5em;

        font-size: 1em;

        width: 25vw;
        min-width: 250px !important;

        background-color: rgba(0, 0, 0, 0.1);

        margin: 0.25em;
    }

    @media (prefers-color-scheme: light) {
        .outer {
            background-color: rgba(0, 0, 0, 0.065);
        }
    }
    @media (prefers-color-scheme: dark) {
        .outer {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
    @media (orientation: portrait) {
        .outer {
            width: 80vw;
        }
    }

    .title {
        text-align: left;
        display: block;
        font-size: 1.25em;
        font-family: JelleeBold,ui-rounded;
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
        height: 1.75em;
        border-radius: 0.15em;
    }

    .description {
        text-align: center;
        display: block;
        min-height: 2em;
    }

    .icons {
        font-size: 1.5em;
        text-align: left;
        display: block;
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

<div class="outer">
    <span class="title">
        <a href="/project/{project.name}">{project.name}</a>
        <LazyLoad height="0">
            <span class="icon">
                {#if has(project.icon)}
                    <img height="1.75em" width="43.75em" src={project.icon} alt="{project.name} icon">
                {/if}
            </span>
        </LazyLoad>
        <noscript>
            <span class="icon">
                {#if has(project.icon)}
                    <img height="1.75em" width="43.75em" src={project.icon} alt="{project.name} icon">
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

    <span class="icons">
        {#if has(project.modrinthId)}
            <a href="https://modrinth.com/plugin/{project.modrinthId}" target="_blank">
                <img src="https://modrinth.com/favicon.ico" alt="Link to {project.name} on Modrinth">
            </a>
        {/if}

        {#if has(project.polymartId)}
            <a href="https://polymart.org/resource/{project.polymartId}" target="_blank">
                <img src="https://polymart.org/style/logo_96.png" alt="Link to {project.name} on Polymart">
            </a>
        {/if}

        {#if has(project.spigotId)}
            <a href="https://spigotmc.org/resources/{project.spigotId}" target="_blank">
                <img src="/img/spigot.ico" alt="Link to {project.name} on Spigot">
            </a>
        {/if}

        {#if has(project.github) || has(project.gitlab)}
            <a href="https://{project.github ? 'github' : 'gitlab'}.com/{project.github ? project.github : project.gitlab}" target="_blank">
                <Icon icon="carbon:code" alt="Link to {project.name} on {project.github ? 'GitHub' : 'GitLab'}"/>
            </a>
        {/if}

        {#if has(project.webpage)}
            <a href="{project.webpage}" target="_blank">
                <Icon icon="mdi:web" alt="Link to {project.name}"/>
            </a>
        {/if}

        <span class="docs">
            {#if has(project.docs)}
                <Button href="https://wiki.ajg0702.us/{project.docs}" target="_blank">Docs</Button>
            {:else}
                &nbsp;
            {/if}
        </span>

    </span>
</div>