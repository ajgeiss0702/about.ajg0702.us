<script>
    export let href;
    export let target = "_self";
</script>
<style>
    a {
        display: inline-block;

        color: goldenrod;
        border-color: goldenrod;

        border-style: solid;
        border-radius: 0.25em;

        padding: 0.1em 0.25em 0;

        font-size: 0.75em;

        text-decoration: none;
    }
    a:hover {
        border-color: darkgoldenrod;
    }
    @media (prefers-color-scheme: light) {
        a {
            color: darkgoldenrod;
        }
    }
</style>
<a {href} {target}>
    <slot/>
</a>