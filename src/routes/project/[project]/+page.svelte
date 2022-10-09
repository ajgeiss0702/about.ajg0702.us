<script lang="ts">
    import {Project} from "$lib/projects";
    import DownloadCounter from "$lib/DownloadCounter.svelte";

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

    div.header {
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
        div.header {
            background-color: rgba(242, 242, 242, 0.5);
            box-shadow: 0 0 33px -15px rgba(0,0,0,0.75);
        }
    }
</style>
<div class="container">
    <div class="header">
        <img src={project.icon} alt="{project.name} icon" height="64" width="64">
        <div class="title-container">
            <h2>{project.name}</h2>
            {project.description}
        </div>
        <br>
        <div class="right">
            <DownloadCounter {project}/>
        </div>
    </div>
    <br>
</div>