<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="flex h-screen">
	<div class="animate__animated animate__fadeIn m-auto">
		<h1 class="text-4xl font-light drop-shadow-sm">
			{$page.status} | {$page.error?.message}
		</h1>
	</div>
</section>

<style>
</style>
