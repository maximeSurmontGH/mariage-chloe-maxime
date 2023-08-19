<script>
	import { slide } from 'svelte/transition';

	let hidePanel = false;
</script>

<!-- @source : https://developers.google.com/youtube/player_parameters?hl=fr -->
<iframe
	title="our wedding video"
	src="https://www.youtube.com/embed/np3saWCNm4M?&mute=1&autoplay=1&loop=1&rel=0&iv_load_policy=3"
	frameborder="0"
	allowfullscreen
/>

<div class="pop-over">
	<div class="icon-container">
		<button class="display-icon" on:click={() => (hidePanel = !hidePanel)}
			>{#if hidePanel}
				⬆️
			{:else}
				⬇️
			{/if}
		</button>
	</div>

	{#if !hidePanel}
		<div transition:slide>
			<div class="buttons-container">
				<a
					href="https://drive.google.com/drive/folders/15i2OgJTXtoKkEVJBD-3h2w2hNORZ4nAz?usp=sharing"
					target="_blank"
					rel="noreferrer"
					><svg
						width="250"
						height="30"
						xmlns="http://www.w3.org/2000/svg"
						class="font-kingthings-typewriter"
					>
						<polygon fill="var(--red)" points="0,0 250,0 235,15 250,30 0,30 15,15" />
						<text x="30" y="20" font-size="14" fill="white"> Photos du mariage civil </text>
					</svg>
				</a>

				<a
					href="https://drive.google.com/drive/folders/1-ZHVxzdtBFo2lG_KTyLJGvkic-qiH1EW?usp=sharing"
					target="_blank"
					rel="noreferrer"
					><svg
						width="250"
						height="30"
						xmlns="http://www.w3.org/2000/svg"
						class="font-kingthings-typewriter"
					>
						<polygon fill="var(--red)" points="0,0 250,0 235,15 250,30 0,30 15,15" />
						<text x="21" y="20" font-size="14" fill="white"> Photos du mariage laïque </text>
					</svg>
				</a>

				<a
					href="https://drive.google.com/drive/folders/1Ch4Jm4MF-wdR4j04k3RvlqoF7GsIRo8q?usp=sharing"
					target="_blank"
					rel="noreferrer"
					><svg
						width="250"
						height="30"
						xmlns="http://www.w3.org/2000/svg"
						class="font-kingthings-typewriter"
					>
						<polygon fill="var(--red)" points="0,0 250,0 235,15 250,30 0,30 15,15" />
						<text x="39" y="20" font-size="14" fill="white">Photos du photo-booth</text>
					</svg>
				</a>

				<a
					href="https://drive.google.com/drive/folders/1jxhVlN4jxTk6d7rLTuF24FYJFn_q_eV1?usp=sharing"
					target="_blank"
					rel="noreferrer"
					><svg
						width="250"
						height="30"
						xmlns="http://www.w3.org/2000/svg"
						class="font-kingthings-typewriter"
					>
						<polygon fill="var(--red)" points="0,0 250,0 235,15 250,30 0,30 15,15" />
						<text x="22" y="20" font-size="14" fill="white">Venez partager vos photos</text>
					</svg>
				</a>

				<a
					href="https://drive.google.com/drive/folders/1jxhVlN4jxTk6d7rLTuF24FYJFn_q_eV1?usp=sharing"
					target="_blank"
					rel="noreferrer"
					><svg
						width="250"
						height="30"
						xmlns="http://www.w3.org/2000/svg"
						class="font-kingthings-typewriter"
					>
						<polygon fill="var(--red)" points="0,0 250,0 235,15 250,30 0,30 15,15" />
						<text x="35" y="20" font-size="14" fill="white">Vidéo en version longue</text>
					</svg>
				</a>
			</div>

			<div class="footer-container">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg width="31" height="31" fill="var(--red)">
					<rect x="12" y="-10" width="14" height="14" transform="rotate(45)" />
				</svg>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg width="31" height="31" fill="var(--pink)">
					<rect x="12" y="-10" width="14" height="14" transform="rotate(45)" />
				</svg>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg width="31" height="31" fill="var(--yellow)">
					<rect x="12" y="-10" width="14" height="14" transform="rotate(45)" />
				</svg>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg width="31" height="31" fill="var(--blue)">
					<rect x="12" y="-10" width="14" height="14" transform="rotate(45)" />
				</svg>
			</div>
		</div>
	{/if}
</div>

<style>
	iframe {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
	}

	.pop-over {
		position: fixed;
		bottom: 45px;
		/* right: 100px;
		width: calc(100% - 200px); */
		z-index: 9999;
		width: 100%;
	}

	.icon-container,
	.footer-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.icon-container {
		margin-bottom: 10px;
	}
	.footer-container {
		margin-top: 10px;
	}

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}

	.display-icon {
		border-radius: 5px;
		left: 50%;
		font-size: 20px;
	}

	.buttons-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		row-gap: 10px;
		column-gap: 20px;
	}

	a {
		white-space: nowrap;
		cursor: pointer;
		min-width: 30%;
		display: flex;
		justify-content: center;
	}

	svg text:hover {
		text-decoration: underline;
	}
</style>
