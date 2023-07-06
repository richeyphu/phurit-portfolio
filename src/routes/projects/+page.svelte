<script lang="ts">
	import { projects } from './projects';
	import Card from './Card.svelte';
</script>

<svelte:head>
	<title>Projects | phurit.de</title>
	<meta name="description" content="My projects" />
</svelte:head>

<content class="flex sm:h-full lg:h-screen px-5 pt-24 pb-20">
	<div class="mx-auto justify-center">
		<h1 class="font-light text-4xl drop-shadow">Projects</h1>
		<div class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each [...projects].reverse() as project}
				<Card title={project.title} description={project.description} link={project.link} />
			{/each}
			<Card title="Coming soon" />
		</div>
	</div>
</content>
