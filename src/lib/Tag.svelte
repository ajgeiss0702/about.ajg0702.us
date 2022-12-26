<style>
    span {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 0.25em 0.5em;
        border-radius: 10px;
    }
    @media (prefers-color-scheme: dark) {
        span {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
</style>
<span>
    <slot/>
</span>