<script>
    import {capitalize, pluralize} from "$lib/utils";
    import {projects} from "$lib/projects";
    import Project from "$lib/Project.svelte";

    export let data;

    let title;
    $: updateTitle(data);

    function updateTitle(data) {
        title = capitalize(pluralize(data.tag)).replaceAll("-", " ");
    }

</script>
<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{title} made by ajgeiss0702"/>
</svelte:head>
<style>
    .cont {
        text-align: center;
    }
</style>
<div class="cont">
    <h1 class="h1">{title}</h1>
    {#each projects.filter(p => p.tags.indexOf(data.tag) !== -1) as project (project)}
        <Project {project}/>
    {/each}
</div>