<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="p-3">
	<div class="flex justify-between">
		<a href="/" class="w-10 brightness-50 invert hover:opacity-90 transition-all duration-200">
			<img src="/favicon.png" alt="phurit.de" />
		</a>

		<nav
			class="flex flex-row gap-3 my-auto pr-2 text-gray-200 text-lg font-light drop-shadow [&>a:hover]:opacity-80 [&>a]:transition-all [&>a]:duration-200"
		>
			<a
				href="/"
				class={$page.url.pathname === '/'
					? 'bg-gray-900 bg-opacity-40 backdrop-blur-md px-2 rounded-md'
					: ''}>/home</a
			>
			<a
				href="/projects"
				class={$page.url.pathname === '/projects'
					? 'bg-gray-900 bg-opacity-40 backdrop-blur-md px-2 rounded-md'
					: ''}>/projects</a
			>
			<a
				href="/about"
				class={$page.url.pathname === '/about'
					? 'bg-gray-900 bg-opacity-40 backdrop-blur-md px-2 rounded-md'
					: ''}>/about</a
			>
		</nav>
	</div>
</header>

<style lang="">
	header {
		position: fixed;
		width: 100%;
		height: 65px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);
		z-index: 100;
	}
</style>
