<svelte:head>
    <title>ajgeiss0702</title>
</svelte:head>
<script>
    import Project from '$lib/Project.svelte';
    import {projects} from "$lib/projects.ts";
</script>
<style>
    .center {
        text-align: center;
    }
</style>


<div class="center">
    <h1>ajgeiss0702</h1>
    <h3>Hello!</h3>
    <div id="intro" class="anchor"></div>
    <p class="paragraph">
        I'm <a href="hello" class="hidden-link">aj</a>, and I am a developer. I mainly write in java, but I also occasionally make web pages (such as this one).
        I'm currently attending college studying Computer Science.<br>
        <br>
        I've always loved doing things on the computer. Ever since I was little, I've always loved creating stuff on the computer. I didn't know how to code in the early days, so I mainly made small Minecraft servers. As the years went on, this encouraged me to learn java. I got a kickstart on learning java from a one-week summer camp where we created a small Minecraft mod. That camp didn't teach very much, just the basics of syntax and how a few basic things worked in the language. From there, I could learn how to do something by looking it up and looking at existing open-source code (note: don't just copy existing code, learn from it). Some of my early projects were very bad code-wise, but over the years, I improved. I feel the thing that brought me to the level I am today is another java developer with whom I had a class in high school. I became good friends with them, and I can attribute many recent successes to them.
    </p>
    <br>
    <h2>Projects</h2>
    <div id="projects" class="anchor"></div>
    <br>
    {#each projects as project (project)}
        <Project {project}/>
    {/each}
</div>

