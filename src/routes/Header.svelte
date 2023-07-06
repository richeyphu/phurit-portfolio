<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="p-3">
	<div class="flex justify-between">
		<a href="/" class="w-10 brightness-50 invert">
			<img src="/favicon.png" alt="phurit.de" />
		</a>

		<nav class="flex flex-row gap-3 my-auto pr-2 text-gray-200 text-lg font-light drop-shadow">
			<a href="/">/home</a>
			<a href="/projects">/projects</a>
			<a href="/about">/about</a>
		</nav>
	</div>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		height: 100px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);
		z-index: 100;
	}
</style>
