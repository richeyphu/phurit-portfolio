<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="flex h-screen">
	<div class="m-auto animate__animated animate__fadeIn">
		<h1 class="font-light text-4xl drop-shadow">
			{$page.status} | {$page.error?.message}
		</h1>
	</div>
</section>

<style>
</style>
