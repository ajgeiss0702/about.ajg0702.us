import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		csp: {
			directives: {
				'object-src': ['self', 'https://static.cloudflareinsights.com/beacon.min.js']
			}
		}
	}
};

export default config;
