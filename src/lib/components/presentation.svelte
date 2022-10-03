<script>
	import { fly } from 'svelte/transition';
</script>

<section class="page flex-centered" in:fly={{ duration: 500, x: 500 }}>
	<img src="/logo-mariage.png" alt="logo mariage" />
</section>

<style>
	img {
		width: 50%;
	}
</style>
