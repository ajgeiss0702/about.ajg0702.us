<script>
    export let href;
    export let target = "_self";
    export let aria_label;
</script>
<a {href} {target} {aria_label} class="btn variant-ringed-primary anchor p-2 py-1">
    <slot/>
</a>

<style>
    a {
        font-size: 0.8em;
    }

    a:hover {
        text-decoration: none;
    }

    a:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    :global(.dark) a:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

</style>