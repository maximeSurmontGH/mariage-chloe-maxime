<script>
	import { onMount } from 'svelte';
	import AboutUs from '../lib/components/about-us.svelte';
	import ConfirmYourPresence from '../lib/components/confirm-your-presence.svelte';
	import LoadingPage from '../lib/components/loading-page.svelte';
	import Presentation from '../lib/components/presentation.svelte';
	import WeddingPlace from '../lib/components/wedding-place.svelte';
	import After from '../lib/components/after.svelte';
	import { stepIndexStore } from '../lib/stores/step-index.store';
	import { fade } from 'svelte/transition';

	let loading = true;

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 2000);
	});
</script>

<svelte:head>
	<title>Les Pellemont</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if loading}
	<span out:fade>
		<LoadingPage />
	</span>
{:else if $stepIndexStore === 'After'}
	<span transition:fade>
		<After />
	</span>
{:else if $stepIndexStore === 'Presentation'}
	<span transition:fade>
		<Presentation />
	</span>
{:else if $stepIndexStore === 'AboutUs'}
	<span transition:fade>
		<AboutUs />
	</span>
{:else if $stepIndexStore === 'WeddingPlace'}
	<span transition:fade>
		<WeddingPlace />
	</span>
{:else if $stepIndexStore === 'ConfirmYourPresence'}
	<span transition:fade>
		<ConfirmYourPresence />
	</span>
{/if}

<style>
</style>
