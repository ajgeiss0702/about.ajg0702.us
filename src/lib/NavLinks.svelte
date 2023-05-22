
<span class:vertical={vertical}>
    <a href="/#intro" class="anchor" on:click={close}>
        Introduction
    </a>
    <a href="/#projects" class="anchor" on:click={close}>
        Projects
    </a>
    <a href="/contact" class="anchor">
        Contact
    </a>
</span>

<style>
    a {
        padding-left: 2em;
    }

    .vertical > a {
        display: block;
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }
</style>
<script>
    import {drawerStore} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";

    export let vertical = false;

    function close() {
        if($page.url.pathname === "/") {
            drawerStore.close();
        }
    }
</script>