<script lang="ts">
	import { onMount } from 'svelte';
	import { Window } from '$lib/components';

	onMount(() => {
		// Fetch hit counter
		fetch('/api/counts/visits')
			.then((res) => res.json())
			.then((data) => console.log({ ...data }))
			.catch((err) => console.log(err));
	});
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
