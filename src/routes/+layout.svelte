<script>
    export const prerender = true;

    function toggleHamburger(e) {
        let check = document.getElementById("hamburger-check");
        let collapsable = document.querySelector("div.links");
        if(e.target.tagName === "A") {
            check.checked = false;
            console.log("unchecking!")
        }
        if(check.checked) {
            collapsable.classList.remove("hidden");
        } else {
            collapsable.classList.add("hidden");
        }
        console.log("hidden: " + collapsable.classList.contains("hidden"));
    }
</script>
<style>

    :global(.anchor) {
        height: 0;
        width: 0;
        position: relative;
        top: -110px;
    }

    :global(.paragraph) {
        margin-left: auto;
        margin-right: auto;
    }

    nav {
        font-size: 1.25em;
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        line-height: 1.5em;

        transition-property: height;
        transition-delay: 1s;

        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);

        z-index: 100;
        padding: 3px;
        margin: 0;
    }
    img {
        height: 1.75em;
        line-height: 1em;
        float: left;
    }

    a {
        color: goldenrod;
    }
    a:hover {
        color: darkgoldenrod;
    }

    .links {
        padding-left: 1em;
        padding-right: 1em;
        display: inline;
    }

    @media (prefers-color-scheme: light) {
        nav {
            background-color: rgba(0, 0, 0, 0.065);
        }
    }
    @media (prefers-color-scheme: dark) {
        nav {
            background-color: rgba(0, 0, 0, 0.1);
        }
        .line {
            background-color: white !important;
        }
        .line::before {
            background-color: white !important;
        }
        .line::after {
            background-color: white !important;
        }
    }

    .hamburger-check {
        display: none;
    }
    .hamburger-container {
        display: none;
    }


    .hamburger-check:checked + label #midline {
        transform: rotate(45deg);
    }
    .hamburger-check:checked + label #midline::before {
        transform: rotate(-90deg) translateX(-8px);
    }
    .hamburger-check:checked + label #midline::after {
        display: none;
    }
    .hamburger-container > label {
        cursor: pointer;
    }
    
    @media (orientation: portrait) {
        .links {
            display: block;
            text-align: center;
        }
        .hidden {
            display: none;
        }
        .hamburger-container > label {
            display: block;
        }
        .hamburger-container {
            display: inline;
            position: fixed;

            right: 2em;
            top: 0.75em;
        }

        .line {
            position: absolute;
            height: 5px;
            width: 30px;
            background-color: black;
            transition: .4s ease;
        }
        .line::before {
            content: '';
            position: absolute;
            height: 5px;
            width: 30px;
            background-color: black;
            top: -8px;
            transition: .4s ease;
        }
        .line::after{
            content: '';
            position: absolute;
            height: 5px;
            width: 30px;
            background-color: black;
            top: 8px;
        }

        .links>a::after {
            content: "\a";
            white-space: pre-line;
        }
        :global(.paragraph) {
            max-width: 90vw;
        }
    }
    @media (orientation: landscape) {
        .links > a {
            padding-right: 1em;
        }
        :global(.paragraph) {
            max-width: 60vw;
        }
        nav {
            padding-left: 1em;
        }
    }

    :global(h1,h2,h3,h4) {
        font-family: JelleeBold,ui-rounded;
    }
    :global(.hidden-link) {
        color: inherit;
        text-decoration: none;
        cursor: inherit;
    }
</style>

<nav on:click={toggleHamburger}>
    <a href="/">
        <img src="https://ajg0702.us/pics/logo.png" alt="ajgeiss0702 logo">
    </a>
    &nbsp;
    <div class="hamburger-container">
        <input type="checkbox" id="hamburger-check" class="hamburger-check">
        <label for="hamburger-check">
            <div class="line" id="midline"></div>
        </label>
    </div>

    <div class="links hidden">
        <a href="about:blank" style="padding: 0;margin: 0;text-decoration: none;">&nbsp;</a> <!-- this needs to be here because other wise the first link is indented on mobile for some reason -->
        <a href="/#intro">
            Introduction
        </a>
        <a href="/#projects">
            Projects
        </a>
    </div>
</nav>
<br>
<br>
<br>

<slot></slot>