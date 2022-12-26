<script>
    import {capitalize, pluralize} from "$lib/utils";
    import {projects} from "$lib/projects";
    import Project from "$lib/Project.svelte";

    export let data;
</script>
<style>
    .cont {
        text-align: center;
    }
</style>
<div class="cont">
    <h1>{capitalize(pluralize(data.tag)).replaceAll("-", " ")}</h1>
    {#each projects.filter(p => p.tags.indexOf(data.tag) !== -1) as project (project)}
        <Project {project}/>
    {/each}
</div>