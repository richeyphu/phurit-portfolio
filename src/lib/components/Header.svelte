<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="p-3">
	<div class="flex justify-between">
		<a href="/" class="w-10 brightness-50 invert transition-all duration-200 hover:opacity-90">
			<img src="/favicon.png" alt="phurit.de" />
		</a>

		<nav
			class="my-auto flex flex-row gap-3 pr-2 text-lg font-light text-gray-200 drop-shadow [&>a:hover]:opacity-80 [&>a]:transition-all [&>a]:duration-200"
		>
			<a
				href="/"
				class={$page.url.pathname === '/'
					? 'rounded-md bg-white/10 px-2 text-gray-100 shadow backdrop-blur-none'
					: ''}>/home</a
			>
			<a
				href="/projects"
				class={$page.url.pathname === '/projects'
					? 'rounded-md bg-white/10 px-2 text-gray-100 shadow backdrop-blur-none'
					: ''}>/projects</a
			>
			<a
				href="/about"
				class={$page.url.pathname === '/about'
					? 'rounded-md bg-white/10 px-2 text-gray-100 shadow backdrop-blur-none'
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
