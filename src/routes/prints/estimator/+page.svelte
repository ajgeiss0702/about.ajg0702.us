<script>
    import "../../../app.css";

    let hoursDone = 0;
    let minutesDone = 30;

    $: timeElapsed = (hoursDone * 60) + minutesDone;

    let percentDone = 50;
    $: done = percentDone / 100;

    $: totalTime = ((1 / done) * timeElapsed);
    $: totalLeft = totalTime - timeElapsed;

    $: minsLeft = totalLeft % 60;
    $: hoursLeft = (totalLeft / 60) % 60;

    $: totalMins = totalTime % 60;
    $: totalHours = (totalTime / 60) % 60;
</script>
<div class="text-center">
    <h1 class="h1">Print time estimator</h1>
    This page is a tool that makes it easier to estimate how much time is left on prints.<br>
    <br>
    <br>

    <h2 class="h2">Elapsed:</h2>
    <input class="numberInput" type="number" bind:value={hoursDone}>h
    <input class="numberInput" type="number" bind:value={minutesDone}>m

    <br>
    <br>

    <h2 class="h2">Percent done:</h2>
    <input type="range" min="0" max="100" bind:value={percentDone}>
    <span class="numbers" style="display: inline-block; width: 2.5em;">
        <input class="numberInput" type="number" bind:value={percentDone}>
    </span>%

    <br>
    <br>

    <h2 class="h2">Estimated time left</h2>
    <span class="numbers">
        {#if hoursLeft > 0}
            {Math.floor(hoursLeft)}h
        {/if}
        {Math.floor(minsLeft)}m
        <br>
        of
        {#if totalHours > 0}
            {Math.floor(totalHours)}h
        {/if}
        {Math.floor(totalMins)}m
    </span>
</div>