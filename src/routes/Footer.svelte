<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="absolute bottom-0 w-full p-2 flex justify-center">
		<a class="font-extralight text-sm text-gray-300" href="/"> © {year} phurit.de </a>
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
