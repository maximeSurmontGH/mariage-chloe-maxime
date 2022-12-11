<script>
	import Breadcrumb from './breadcrumb.svelte';
	import { fly } from 'svelte/transition';

	export let footerIsSticky = true;
</script>

<!-- <section in:fly={{ duration: 500, x: 500 }}> -->
<section>
	<slot name="header" />

	<div class="content-container">
		<div class="header-content-content">
			<slot name="header-content" />
		</div>

		<div class="main-content-container">
			<slot name="main-content" />
		</div>

		<div
			class="footer-content-container"
			style={`position: ${footerIsSticky ? 'sticky' : 'relative'};`}
		>
			<slot name="footer-content" />
			<Breadcrumb />
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

	.header-content-content {
		position: sticky;
		top: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		width: 100%;
		z-index: 2;
	}

	.main-content-container {
		width: 100%;
		flex-grow: 1;
		max-width: 400px;
	}

	.footer-content-container {
		position: sticky;
		bottom: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		width: 100%;
		z-index: 900;
	}
</style>
