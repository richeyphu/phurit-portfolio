<script lang="ts">
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
</script>

<button
	type="button"
	onclick={scrollToTop}
	class="inline-flex items-center rounded-lg border border-gray-700 bg-gray-800 bg-opacity-40 p-2.5 text-center text-sm font-medium shadow-lg backdrop-blur-lg transition-colors hover:bg-opacity-30"
>
	<svg
		class="h-6 w-6"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
	>
		<path
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="m5 15 7-7 7 7"
		/>
	</svg>
	<span class="sr-only">Go to top</span>
</button>
