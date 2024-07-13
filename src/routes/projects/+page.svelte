<script lang="ts">
	import { projects, featuredProjects } from './projects';
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
		<h1 class="text-4xl font-light drop-shadow">Projects</h1>

		<p class="mt-8 max-w-xs text-xl font-light tracking-wide md:max-w-none">
			Discover some of the ideas that I've brought to life! ✨
		</p>

		<!-- Featured Projects Section starts -->
		{#if featuredProjects.length > 0}
			<h2 class="mt-12 text-3xl font-light drop-shadow">Featured</h2>
			<div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{#each [...featuredProjects].reverse() as project}
					<Card
						class="animate__animated animate__fadeInUp"
						title={project.title}
						description={project.description}
						link={project.link}
					/>
				{/each}
			</div>
		{/if}
		<!-- Featured Projects Section ends -->

		<hr class="mx-auto my-10 h-1 w-48 rounded border-0 bg-gray-400" />

		<!-- Other Projects Section starts -->
		<div class="mt-8 grid grid-cols-1 gap-4 overflow-y-hidden pb-20 sm:grid-cols-2 md:grid-cols-3">
			{#each Array(Math.ceil(projects.length / 3)) as _, i}
				<div class="grid gap-4">
					{#each [...projects].reverse().slice(i * 3, i * 3 + 3) as project}
						<Card
							class="animate__animated animate__fadeInUp"
							title={project.title}
							description={project.description}
							link={project.link}
						/>
					{/each}
				</div>
			{/each}
		</div>
		<!-- Other Projects Section ends -->
	</div>
</section>
