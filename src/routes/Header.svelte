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
					? 'bg-white/10 backdrop-blur-md shadow px-2 rounded-md text-gray-100'
					: ''}>/home</a
			>
			<a
				href="/projects"
				class={$page.url.pathname === '/projects'
					? 'bg-white/10 backdrop-blur-md shadow px-2 rounded-md text-gray-100'
					: ''}>/projects</a
			>
			<a
				href="/about"
				class={$page.url.pathname === '/about'
					? 'bg-white/10 backdrop-blur-md shadow px-2 rounded-md text-gray-100'
					: ''}>/about</a
			>
		</nav>
	</div>
</header>

<style lang="">
	header {
		position: fixed;
		width: 100%;
		height: 80px;
		z-index: 100;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);
		backdrop-filter: blur(12px);
		mask: linear-gradient(to bottom, black 60%, transparent);
	}
</style>
