<svelte:head>
    <title>{project.name} - ajgeiss0702</title>
</svelte:head>
<script lang="ts">
    import {Project} from "$lib/projects";
    import DownloadCounter from "$lib/DownloadCounter.svelte";
    import {has} from "$lib/utils";
    import Icon from "@iconify/svelte";
    import Button from "$lib/Button.svelte";

    export let data: Project;

    $: project = data;
</script>
<style>
    div.container {
        max-width: 95vw;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    h2 {
        line-height: 0;
    }
    h3 {
        margin-bottom: 0.25em;
    }

    div.box {
        align-items: center;

        background-color: #34343480;
        box-shadow: 0 0 33px -15px #000000bf;
        margin: 0.75em auto;
        padding: 1em;
        border-radius: 12px;

        overflow-x: hidden;
        width: 100%;
        max-width: 85vw;
    }

    div.header {
        width: 100%;
    }

    img {
        border-radius: 0.25em;
    }

    a > img {
        height: 1em;
    }

    .larger {
        font-size: 2em;
    }

    @media (orientation: landscape) {
        div.header {
            display: inline-flex;
        }
        h2 {
            text-align: left;
        }
        div.container {
            max-width: 80em;
        }
        div.title-container {
            padding-left: 1em
        }
        .right {
            margin-left: auto;
            justify-self: right;
        }
    }

    @media (prefers-color-scheme: light) {
        div.box {
            background-color: rgba(242, 242, 242, 0.5);
            box-shadow: 0 0 33px -15px rgba(0,0,0,0.75);
        }
    }
</style>
<div class="container">
    <div class="box">
        <div class="header">
            {#if project.icon}
                <img src={project.icon} alt="{project.name} icon" height="64" width="64">
            {/if}
            <div class="title-container">
                <h2>{project.name}</h2>
                {project.description}
            </div>
            <br>
            <div class="right">
                <DownloadCounter {project}/>
            </div>
        </div>
        <hr>
        <br>
        <h3>Pages:</h3>
        {#if has(project.modrinthId)}
            <a href="https://modrinth.com/plugin/{project.modrinthId}" target="_blank">
                <img src="https://modrinth.com/favicon.ico" alt="Link to {project.name} on Modrinth">
                Modrinth
            </a>
            <br>
        {/if}

        {#if has(project.polymartId)}
            <a href="https://polymart.org/resource/{project.polymartId}" target="_blank">
                <img src="https://polymart.org/style/logo_96.png" alt="Link to {project.name} on Polymart">
                Polymart
            </a>
            <br>
        {/if}

        {#if has(project.spigotId)}
            <a href="https://speedgot.vercel.app/resources/{project.spigotId}" target="_blank">
                Speedgot
            </a>
            <br>
            <a href="https://spigotmc.org/resources/{project.spigotId}" target="_blank">
                <img src="/img/spigot.ico" alt="Link to {project.name} on Spigot">
                SpigotMC
            </a>
            <br>
        {/if}

        {#if has(project.github) || has(project.gitlab)}
            <a href="https://{project.github ? 'github' : 'gitlab'}.com/{project.github ? project.github : project.gitlab}" target="_blank">
                <Icon icon="carbon:code" alt="Link to {project.name} on {project.github ? 'GitHub' : 'GitLab'}"/>
                Source Code
            </a>
            <br>
        {/if}

        {#if has(project.webpage)}
            <a href="{project.webpage}" target="_blank">
                <Icon icon="mdi:web" alt="Link to {project.name}"/>
            </a>
            <br>
        {/if}

        <span class="docs">
            {#if has(project.docs)}
                <br>
                <span class="larger">
                    <Button href="https://wiki.ajg0702.us/{project.docs}" target="_blank">Docs</Button>
                </span>
                <br>
            {/if}
        </span>
    </div>
</div>