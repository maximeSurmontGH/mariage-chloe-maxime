<script>
	import AboutUs from '../lib/components/about-us.svelte';
	import Breadcrumb from '../lib/components/breadcrumb.svelte';
	import ConfirmYourPresence from '../lib/components/confirm-your-presence.svelte';
	import Presentation from '../lib/components/presentation.svelte';
	import SeeYouSoon from '../lib/components/see-you-soon.svelte';
	import WeddingPlace from '../lib/components/wedding-place.svelte';
	import WeddingTeam from '../lib/components/wedding-team.svelte';
	import { stepIndexStore } from '../lib/stores/step-index.store';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="app flex-centered">
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
	{:else if $stepIndexStore === 'SeeYouSoon'}
		<SeeYouSoon />
	{/if}
	<Breadcrumb />
</section>

<style>
</style>
