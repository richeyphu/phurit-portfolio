<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="absolute bottom-0 flex w-full justify-center p-2">
		<a class="text-sm font-extralight text-gray-300" href="/"> © {year} phurit.de </a>
	</div>
</footer>

<style>
	footer {
		position: fixed;
		width: 100%;
		height: 50px;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
		bottom: 0;
		opacity: 0.5;
	}
</style>
