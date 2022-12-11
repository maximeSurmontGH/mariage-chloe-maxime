<script>
	import AboutUs from '../lib/components/about-us.svelte';
	import ConfirmYourPresence from '../lib/components/confirm-your-presence.svelte';
	import Presentation from '../lib/components/presentation.svelte';
	import WeddingPlace from '../lib/components/wedding-place.svelte';
	import WeddingTeam from '../lib/components/wedding-team.svelte';
	import { stepIndexStore } from '../lib/stores/step-index.store';
</script>

<svelte:head>
	<title>Les Pellemont</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if $stepIndexStore === 'Presentation'}
	<Presentation />
{:else if $stepIndexStore === 'AboutUs'}
	<AboutUs />
{:else if $stepIndexStore === 'WeddingPlace'}
	<WeddingPlace />
{:else if $stepIndexStore === 'ConfirmYourPresence'}
	<ConfirmYourPresence />
{:else if $stepIndexStore === 'WeddingTeam'}
	<WeddingTeam />
{/if}

<style>
</style>
