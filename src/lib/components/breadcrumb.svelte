<script>
	import { stepIndexStore } from '../stores/step-index.store';

	const updateStepIndex = (newIndex) => {
		$stepIndexStore = newIndex;
	};
</script>

<div class="breadcrumb flex-centered">
	<div
		class={`dot ${$stepIndexStore === 'Presentation' ? 'dot-active' : ''}`}
		on:click={() => updateStepIndex('Presentation')}
	/>
	<div
		class={`dot ${$stepIndexStore === 'AboutUs' ? 'dot-active' : ''}`}
		on:click={() => updateStepIndex('AboutUs')}
	/>
	<div
		class={`dot ${$stepIndexStore === 'WeddingPlace' ? 'dot-active' : ''}`}
		on:click={() => updateStepIndex('WeddingPlace')}
	/>
	<div
		class={`dot ${$stepIndexStore === 'ConfirmYourPresence' ? 'dot-active' : ''}`}
		on:click={() => updateStepIndex('ConfirmYourPresence')}
	/>
	<div
		class={`dot ${$stepIndexStore === 'WeddingTeam' ? 'dot-active' : ''}`}
		on:click={() => updateStepIndex('WeddingTeam')}
	/>
	<div
		class={`dot ${$stepIndexStore === 'SeeYouSoon' ? 'dot-active' : ''}`}
		on:click={() => updateStepIndex('SeeYouSoon')}
	/>
</div>

<style>
	.breadcrumb {
		position: absolute;
		bottom: 5%;
		flex-direction: row;
	}

	.dot {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: rgba(103, 144, 147, 0.6);
		margin: 0 5px;
		cursor: pointer;
	}

	.dot-active {
		width: 20px;
		height: 20px;
		margin: 0;
	}
</style>
