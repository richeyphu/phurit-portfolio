<script lang="ts">
	export let title: string = 'Lorem ipsum dolor sit amet';
	export let description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let link: string = '#';
</script>

<div class="h-auto max-w-full rounded-lg {$$restProps.class || ''}">
	<a
		href={link}
		target={link.startsWith('#') ? '' : '_blank'}
		class="block max-w-sm p-6 border rounded-lg shadow-lg bg-gray-800 border-gray-700 bg-opacity-40 hover:bg-opacity-30 backdrop-blur-lg h-full"
	>
		<h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-200">
			{title}
		</h5>
		<p class="font-normal text-gray-400">
			{description}
		</p>
	</a>
</div>
