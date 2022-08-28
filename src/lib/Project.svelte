<script>

    import Icon from '@iconify/svelte';
    import Button from '$lib/Button.svelte';
    import LazyLoad from '@dimfeld/svelte-lazyload';

    export let name;
    export let icon;
    export let description;
    export let spigotId;
    export let polymartId;
    export let modrinthId;
    export let github;
    export let gitlab;
    export let webpage;
    export let docs;

    /**
     * @returns {boolean}
     */
    function has(arg) {
        return typeof arg !== 'undefined';
    }

    let downloads = new Promise(() => {});

    /**
     * @returns {Promise}
     */
    function getDownloads() {
        return new Promise(resolve => {
            let total = 0;
            let curr = 0;
            let num = 0;

            if(has(spigotId)) {
                num++;
                fetch("https://api.spiget.org/v2/resources/"+spigotId)
                    .then(async (response) => {
                        let json = await response.json();

                        if(has(json.downloads)) {
                            let dl = json.downloads
                            total += dl;
                            console.debug(name+" Spigot has "+dl);
                        }

                    })
                    .catch(() => {})
                    .finally(() => {
                        curr++;
                        if(curr >= num) resolve(total)
                    })
            }
            if(has(polymartId)) {
                num++;
                fetch("https://api.polymart.org/v1/getResourceInfo/?resource_id="+polymartId)
                    .then(async (response) => {
                        let json = await response.json();

                        if(has(json.response) && has(json.response.resource) && has(json.response.resource.downloads)) {
                            let dl = Number(json.response.resource.downloads);
                            total += dl;
                            console.debug(name+" Polymart has "+dl);
                        }

                    })
                    .catch(() => {})
                    .finally(() => {
                        curr++;
                        if(curr >= num) resolve(total)
                    })
            }
            if(has(modrinthId)) {
                num++;
                fetch("https://api.modrinth.com/v2/project/"+modrinthId)
                    .then(async (response) => {
                        let json = await response.json();

                        if(has(json.downloads)) {
                            let dl = json.downloads
                            total += dl;
                            console.debug(name+" Modrinth has "+dl);
                        }

                    })
                    .catch(() => {})
                    .finally(() => {
                        curr++;
                        if(curr >= num) resolve(total)
                    })
            }


            if(num === 0) resolve(0);
        });
    }

    function commas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
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

    .downloads {
        font-size: 1em;
        font-family: ui-rounded;
        margin-left: auto;
        line-height: 0.5em;
        padding-bottom: 0.5em;
        text-align: left;
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
        {name}
        <span class="icon">
            {#if has(icon)}
                <img src={icon} alt="{name} icon">
            {/if}
        </span>
    </span>

    <hr>

    <span class="description">
        {description}
    </span>

    <span class="downloads">
        {#if has(modrinthId) || has(polymartId) || has(spigotId)}
            <Icon icon="bx:download" alt="Download count"/>
            {#await downloads}
                <Icon icon="eos-icons:loading" alt="Loading"/>&nbsp;
            {:then number}
                {commas(number)}
            {:catch error}
                <Icon icon="icon-park-solid:caution" alt="Error"/>
            {/await}
            <LazyLoad height="0" on:visible={() => downloads = getDownloads()}/>
        {:else}
            &nbsp;
        {/if}
    </span>

    <span class="icons">
        {#if has(modrinthId)}
            <a href="https://modrinth.com/plugin/{modrinthId}" target="_blank">
                <img src="https://modrinth.com/favicon.ico" alt="Link to {name} on Modrinth">
            </a>
        {/if}

        {#if has(polymartId)}
            <a href="https://polymart.org/resource/{polymartId}" target="_blank">
                <img src="https://polymart.org/style/logo_96.png" alt="Link to {name} on Polymart">
            </a>
        {/if}

        {#if has(spigotId)}
            <a href="https://spigotmc.org/resources/{spigotId}" target="_blank">
                <img src="/img/spigot.ico" alt="Link to {name} on Spigot">
            </a>
        {/if}

        {#if has(github) || has(gitlab)}
            <a href="https://{github ? 'github' : 'gitlab'}.com/{github ? github : gitlab}" target="_blank">
                <Icon icon="carbon:code" alt="Link to {name} on {github ? 'GitHub' : 'GitLab'}"/>
            </a>
        {/if}

        {#if has(webpage)}
            <a href="{webpage}" target="_blank">
                <Icon icon="mdi:web" alt="Link to {name}"/>
            </a>
        {/if}

        <span class="docs">
            {#if has(docs)}
                <Button href="https://wiki.ajg0702.us/{docs}" target="_blank">Docs</Button>
            {:else}
                &nbsp;
            {/if}
        </span>

    </span>
</div>