<script>
	import { stepIndexStore } from '../stores/step-index.store';

	const updateStepIndex = (newIndex) => {
		$stepIndexStore = newIndex;
	};
</script>

<div class="breadcrumb flex-centered">
	<svg
		width="31"
		height="31"
		fill="var(--red)"
		class={`dot cursor-pointer ${
			$stepIndexStore === 'Presentation' ? 'dot-active dot-active-red' : ''
		}`}
		on:click={() => updateStepIndex('Presentation')}
	>
		<rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
	</svg>
	<svg
		width="31"
		height="31"
		fill="var(--pink)"
		class={`dot cursor-pointer ${
			$stepIndexStore === 'AboutUs' ? 'dot-active dot-active-pink' : ''
		}`}
		on:click={() => updateStepIndex('AboutUs')}
	>
		<rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
	</svg>
	<svg
		width="31"
		height="31"
		fill="var(--yellow)"
		class={`dot cursor-pointer ${
			$stepIndexStore === 'WeddingPlace' ? 'dot-active dot-active-yellow' : ''
		}`}
		on:click={() => updateStepIndex('WeddingPlace')}
	>
		<rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
	</svg>
	<svg
		width="31"
		height="31"
		fill="var(--blue)"
		class={`dot cursor-pointer ${
			$stepIndexStore === 'ConfirmYourPresence' ? 'dot-active dot-active-blue' : ''
		}`}
		on:click={() => updateStepIndex('ConfirmYourPresence')}
	>
		<rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
	</svg>
</div>

<style>
	.breadcrumb {
		flex-direction: row;
		padding: 10px 0;
		background-color: white;
		width: 100%;
	}

	.dot,
	.dot-active {
		padding-bottom: 5px;
	}

	.dot-active {
		border-bottom: 2px dotted;
	}

	.dot-active-red {
		border-color: var(--red);
	}

	.dot-active-pink {
		border-color: var(--pink);
	}

	.dot-active-yellow {
		border-color: var(--yellow);
	}

	.dot-active-blue {
		border-color: var(--blue);
	}
</style>
