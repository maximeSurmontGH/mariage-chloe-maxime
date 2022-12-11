<script>
	import PageLayout from './page-layout.svelte';
	import Spacer from './spacer.component.svelte';
</script>

<PageLayout>
	<svelte:fragment slot="header-content">
		<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg" class="title">
			<polygon fill="var(--red)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
			<text x="55" y="26" font-size="20" fill="white"> Lieu du mariage </text>
		</svg>
	</svelte:fragment>

	<svelte:fragment slot="main-content">
		<div class="content-container flex-centered">Lieu du mariage</div>
		<Spacer />
	</svelte:fragment>
</PageLayout>

<!-- <script>
	import { fly } from 'svelte/transition';
</script>

<section class="page flex-centered" in:fly={{ duration: 500, x: 500 }}>
	<div class="castle-picture" />
	<div class="content-section">
		<div>wedding team</div>
	</div>
</section>

<style>
	.castle-picture {
		height: 100vh;
		width: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url('wedding-place.jpeg');
		padding: 0;
	}
	/* Effet blur */
	.castle-picture::before {
		content: '';
		position: absolute;
		left: 0;
		z-index: 2;
		width: 100%;
		height: 100%;
		-webkit-backdrop-filter: blur(4px) brightness(0.95) opacity(1);
		backdrop-filter: blur(4px) brightness(0.95) opacity(1);
		pointer-events: none;
	}
	.content-section {
		z-index: 3;
		position: absolute;
	}
</style> -->

<style>
</style>
