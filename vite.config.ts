import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		proxy: {
			'/api/counts': {
				target: 'https://counter.phuritd.workers.dev/hit/phurit.de',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/counts/, '')
			}
		}
	}
});
