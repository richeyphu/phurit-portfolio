<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		link?: string;
		[key: string]: unknown;
	}

	let {
		title = 'Lorem ipsum dolor sit amet',
		description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		link = '#',
		...rest
	}: Props = $props();
</script>

<div class="h-auto max-w-full rounded-lg {rest.class || ''}">
	<a
		href={link}
		target={link.startsWith('#') ? '' : '_blank'}
		class="block h-full max-w-sm rounded-lg border border-gray-700 bg-gray-800 bg-opacity-40 p-6 shadow-lg backdrop-blur-lg transition-colors hover:bg-opacity-30"
	>
		<h3 class="mb-2 text-2xl font-medium tracking-tight text-gray-200">
			{title}
		</h3>
		<p class="font-normal text-gray-400">
			{description}
		</p>
	</a>
</div>
