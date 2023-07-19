<script lang="ts">
	import { projects } from './projects';
	import Card from './Card.svelte';
</script>

<svelte:head>
	<title>phurit.de / projects</title>
	<meta
		name="description"
		content="My Projects: Discover some of the ideas that I've brought to life!"
	/>
</svelte:head>

<section class="flex h-full px-5 pt-24">
	<div class="mx-auto justify-center">
		<h1 class="font-light text-4xl drop-shadow">Projects</h1>

		<p class="mt-8 text-xl font-light tracking-wide max-w-xs md:max-w-none">
			Discover some of the ideas that I've brought to life! ✨
		</p>

		<div
			class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 overflow-y-hidden"
		>
			{#each [...projects].reverse() as project}
				<Card title={project.title} description={project.description} link={project.link} />
			{/each}
			<Card title="Coming soon" />
		</div>
	</div>
</section>
