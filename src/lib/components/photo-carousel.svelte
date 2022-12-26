<script>
	import { scale } from 'svelte/transition';

	export let photos;
	export let displayCarousel;
	export let photoToDisplayIndex;

	const setPreviousPicture = () => {
		if (photoToDisplayIndex === 0) {
			photoToDisplayIndex = photos.length - 1;
		} else {
			photoToDisplayIndex -= 1;
		}
	};

	const setNextPicture = () => {
		if (photoToDisplayIndex + 1 === photos.length) {
			photoToDisplayIndex = 0;
		} else {
			photoToDisplayIndex += 1;
		}
	};
</script>

<div class="pictures-container flex-centered" transition:scale>
	<span class="text-white cursor-pointer">
		<span class="close-icon" on:click={() => (displayCarousel = false)}>fermer</span>
	</span>

	<img src={photos.at(photoToDisplayIndex)} alt="chloé et maxime" />
	<span class="text-white cursor-pointer">
		<span class="previous-icon" on:click={setPreviousPicture}>précédente</span>
		<span class="next-icon" on:click={setNextPicture}>suivante</span>
	</span>
</div>

<style>
	span > span {
		padding: 5px;
	}

	.close-icon {
		background-color: var(--red);
		z-index: 5;
	}

	.previous-icon {
		background-color: var(--pink);
	}

	.next-icon {
		background-color: var(--yellow);
	}

	.pictures-container {
		width: 100vw;
		height: calc(100vh - 58px);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
	}

	img {
		z-index: -1;
		max-width: 90%;
		max-height: 80%;
		border: 10px solid white;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
</style>
