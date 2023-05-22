<script>
	import '../theme.css'

	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';
	// NProgress css
	import 'nprogress/nprogress.css';
	import { navigating } from '$app/stores';
	import NProgress from 'nprogress';

	import '$lib/misc.css';

	import {AppBar, autoModeWatcher, Drawer, drawerStore} from '@skeletonlabs/skeleton';
	import NavLinks from "../lib/NavLinks.svelte";
	import Icon from "@iconify/svelte";
	import {afterNavigate} from "$app/navigation";

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	let progressTimeout;

	$: {
		if ($navigating) {
			clearTimeout(progressTimeout);
			progressTimeout = setTimeout(() => {
				if ($navigating) {
					NProgress.start();
				}
			}, 100);
		}
		if (!$navigating) {
			clearTimeout(progressTimeout);
			NProgress.done();
		}
	}

	afterNavigate(() => {
		drawerStore.close()
	})
</script>

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>

<div class="sticky w-screen top-0 mb-4 appbar">
	<AppBar padding="p-2 pl-6 pr-0" background="">
		<a href="/">
			<img src="https://ajg0702.us/pics/logo.webp" alt="ajgeiss0702" />
		</a>
		<span class="desktop-nav">
			<NavLinks/>
		</span>
		<svelte:fragment slot="trail">
			<span class="mobile-nav">
				<button
						class="hidden-button p-0"
						on:click={() => {drawerStore.open({ id: "sideNavBar", position: "right"})}}
						aria-label="Navigation Menu"
				>
					<Icon icon="majesticons:menu" height="2.75em"/>
				</button>
			</span>
		</svelte:fragment>
	</AppBar>
</div>

<Drawer>
	{#if $drawerStore.id === "sideNavBar"}
		<button class="btn p-2 ml-2 closeButton" on:click={() => drawerStore.close()}>
			<Icon icon="fa6-solid:x" style="height: 2.5em; width: 2.5em;"/>
		</button>
		<div class="text-center">
			<NavLinks vertical={true}/>
		</div>
	{/if}
</Drawer>


<slot />

<style>

    :global(#nprogress .spinner-icon) {
        border-top-color: goldenrod;
        border-left-color: goldenrod;
    }
    :global(#nprogress .peg) {
        box-shadow: 0 0 10px goldenrod, 0 0 5px goldenrod;
    }
    :global(#nprogress .bar) {
        background: goldenrod;
    }

	.appbar {
		font-size: 1.25rem;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		z-index: 5;

		background-color: rgba(0, 0, 0, 0.065);
	}

	:global(.dark) .appbar {
		background-color: rgba(255, 255, 255, 0.065);
	}

	img {
		height: 2.25em;
		display: inline-block;
	}

	.mobile-nav {
		display: inline-block;
		margin-left: auto;
	}

	@media (min-width: 700px) {
		.mobile-nav {
			display: none;
		}
	}

	@media (max-width: 700px) {
		.desktop-nav {
			display: none;
		}
	}

</style>
