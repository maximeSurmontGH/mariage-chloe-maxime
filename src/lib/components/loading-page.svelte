<script>
	import Loader from './loader.svelte';
</script>

<section>
	<slot name="header" />

	<div class="content-container">
		<div class="main-content-container">
			<div class="content-container flex-centered p-10">
				<Loader />
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100%;
		min-height: calc(100vh + var(--footer-height));
		padding-bottom: var(--footer-height);
	}

	.content-container {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.main-content-container {
		width: 100%;
		flex-grow: 1;
		max-width: 400px;
	}
</style>
