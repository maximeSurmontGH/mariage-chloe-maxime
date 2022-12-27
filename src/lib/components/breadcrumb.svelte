<script>
	import { stepIndexStore } from '../stores/step-index.store';

	const stepIndex = ['Presentation', 'AboutUs', 'WeddingPlace', 'ConfirmYourPresence'];

	const updatePreviousStepIndex = () => {
		const index = stepIndex.indexOf($stepIndexStore);
		$stepIndexStore = stepIndex.at(index - 1);
	};

	const updateNextStepIndex = () => {
		const index = stepIndex.indexOf($stepIndexStore);
		$stepIndexStore = stepIndex.at(index + 1);
	};

	const updateStepIndex = (newIndex) => {
		$stepIndexStore = newIndex;
	};
</script>

<div class="breadcrumb flex-centered">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		shape-rendering="geometricPrecision"
		text-rendering="geometricPrecision"
		image-rendering="optimizeQuality"
		fill-rule="evenodd"
		clip-rule="evenodd"
		viewBox="0 0 312 511.42"
		class="cursor-pointer"
		style="width: 13px; margin-right: 10px; margin-top: -5px;"
		on:click={() => updatePreviousStepIndex()}
		><path
			fill-rule="nonzero"
			d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"
		/></svg
	>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
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
	<!-- svelte-ignore a11y-click-events-have-key-events -->
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
	<!-- svelte-ignore a11y-click-events-have-key-events -->
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
	<!-- svelte-ignore a11y-click-events-have-key-events -->
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
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		shape-rendering="geometricPrecision"
		text-rendering="geometricPrecision"
		image-rendering="optimizeQuality"
		fill-rule="evenodd"
		clip-rule="evenodd"
		viewBox="0 0 312 511.42"
		class="cursor-pointer"
		style="width: 13px; margin-left: 10px; margin-top: -5px;"
		on:click={() => updateNextStepIndex()}
		><path
			fill-rule="nonzero"
			d="M35.54 0 312 252.82 29.84 511.42 0 478.8l246.54-225.94L5.7 32.62z"
		/></svg
	>
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
