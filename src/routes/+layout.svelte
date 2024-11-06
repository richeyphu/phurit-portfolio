<script lang="ts">
	import '../app.css';
	import { Header, Footer } from '$lib/components';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<Header />

	<main>
		{@render children?.()}
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
