<script lang="ts">
	import Window from './Window.svelte';
</script>

<svelte:head>
	<title>phurit.de</title>
	<meta name="description" content="Stay hungry, Stay Phulish." />
</svelte:head>

<section class="container">
	<div class="flex-center">
		<Window />
	</div>
</section>

<style>
	.container {
		max-width: 960px;
		margin: 0 auto;
	}
	.flex-center {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
