<svelte:head>
    <title>About ajgeiss0702</title>
    <meta name="description" content="Hello! I'm aj and I am a developer. I mainly write in java, but I also occasionally make web pages (such as this one). I'm currently attending college studying Computer Science.">
</svelte:head>
<script>
    import Project from '$lib/Project.svelte';
    import {projects} from "$lib/projects.ts";
    import Tag from "$lib/Tag.svelte";
</script>
<style>
    .center {
        text-align: center;
    }
    a.tag {
        color: inherit;
    }
</style>


<div class="center">
    <h1 class="h1">
        <img src="https://ajg0702.us/pics/logo.webp"/>
    </h1>
    <div id="intro" class="hash-anchor"></div>
    <h2 class="h2">Hello!</h2>
    <p class="paragraph limit-lg mx-auto">
        I'm aj, and I am a developer. I mainly write in java, but I also occasionally make web pages (such as this one).
        I'm currently attending college studying Computer Science.<br>
        <br>
        I've always loved doing things on the computer. Ever since I was little, I've always loved creating stuff on the computer. I didn't know how to code in the early days, so I mainly made small Minecraft servers. As the years went on, this encouraged me to learn java. I got a kickstart on learning java from a one-week summer camp where we created a small Minecraft mod. That camp didn't teach very much, just the basics of syntax and how a few basic things worked in the language. From there, I could learn how to do something by looking it up and looking at existing open-source code (note: don't just copy existing code, learn from it). Some of my early projects were very bad code-wise, but over the years, I improved. I feel the thing that brought me to the level I am today is another java developer with whom I had a class in high school. I became good friends with them, and I can attribute many recent successes to them.
    </p>
    <br>
    <h2 class="h2">Projects</h2>
    <div id="projects" class="hash-anchor"></div>
    Some projects i've made<br>
    <br>
    Click a tag (e.g. <Tag><a class="tag" href="/tag/plugin">Plugin</a></Tag>) to show projects in that tag
    <br>
    <div class="mt-2">
        {#each projects as project (project)}
            <Project {project}/>
        {/each}
    </div>
</div>

