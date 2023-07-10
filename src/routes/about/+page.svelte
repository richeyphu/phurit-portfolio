<script lang="ts">
	import Typewriter from 'svelte-typewriter';

	const words = [
		'Full-stack Developer',
		'Software Engineer',
		'Research Assistant',
		'Photographer',
		'Designer',
		'Gamer',
		'Writer',
		'Learner',
		'Human',
		'.......',
		'who I am'
	];
</script>

<svelte:head>
	<title>phurit.de / about</title>
	<meta name="description" content="About me" />
</svelte:head>

<section class="flex h-screen">
	<div class="m-auto animate__animated animate__fadeIn">
		<h1 class="font-light text-4xl drop-shadow">
			<Typewriter
				mode="loopOnce"
				wordInterval={1500}
				--cursor-width="0.2rem"
				--cursor-color="rgba(79, 209, 197, 0.75)"
			>
				<span data-static>I am</span>
				{#each words as word, i}
					{#if i >= words.length - 2}
						<span>{`${word}.`}</span>
					{:else}
						<span>{`a ${word}`}</span>
					{/if}
				{/each}
			</Typewriter>
		</h1>
	</div>
</section>
