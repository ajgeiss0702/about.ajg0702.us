<script>
	import '../theme.css'

	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';
	// NProgress css
	import 'nprogress/nprogress.css';
	import { navigating } from '$app/stores';
	import NProgress from 'nprogress';

	import '$lib/misc.css';

	import {AppBar, autoModeWatcher} from '@skeletonlabs/skeleton';
	import NavLinks from "../lib/NavLinks.svelte";

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	function toggleHamburger(e) {
		let check = document.getElementById('hamburger-check');
		let collapsable = document.querySelector('div.links');
		if (e.target.tagName === 'A') {
			check.checked = false;
			console.log('unchecking!');
		}
		if (check.checked) {
			collapsable.classList.remove('hidden');
		} else {
			collapsable.classList.add('hidden');
		}
		console.log('hidden: ' + collapsable.classList.contains('hidden'));
	}
</script>

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>

<div class="sticky w-screen top-0 mb-4 appbar">
	<AppBar padding="p-2 pl-6" background="">
		<a href="/">
			<img src="https://ajg0702.us/pics/logo.webp" alt="ajgeiss0702" />
		</a>
		<NavLinks/>
	</AppBar>
</div>


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

</style>
