<script>
	// import { stepIndexStore } from '../stores/step-index.store';

	// const updateStepIndex = (newIndex) => {
	// 	$stepIndexStore = newIndex;
	// };
</script>

<div class="background-image" />

<div class="content-container">
	<!-- <button class="menu-button-container" on:click={() => updateStepIndex('Presentation')}>
		<img class="menu-button" src="/logo-mariage.png" alt="logo mariage" />
	</button> -->

	<div class="iframe-container">
		<!-- @source : https://developers.google.com/youtube/player_parameters?hl=fr -->
		<iframe
			title="our wedding video"
			src="https://www.youtube.com/embed/np3saWCNm4M?rel=0"
			frameborder="0"
			allowfullscreen
		/>
	</div>

	<div class="pop-over">
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
			<svg width="31" height="31" fill="var(--red)">
				<rect x="12" y="-10" width="14" height="14" transform="rotate(45)" />
			</svg>
			<svg width="31" height="31" fill="var(--pink)">
				<rect x="12" y="-10" width="14" height="14" transform="rotate(45)" />
			</svg>
			<svg width="31" height="31" fill="var(--yellow)">
				<rect x="12" y="-10" width="14" height="14" transform="rotate(45)" />
			</svg>
			<svg width="31" height="31" fill="var(--blue)">
				<rect x="12" y="-10" width="14" height="14" transform="rotate(45)" />
			</svg>
		</div>
	</div>
</div>

<style>
	.background-image {
		position: absolute;
		background-image: url('C&M-304.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
		width: 100%;
		z-index: -1;
		left: 0;
		top: 0;
	}

	/* Effet blur */
	.background-image::before {
		content: '';
		position: absolute;
		left: 0;
		z-index: 2;
		width: 100%;
		height: 100%;
		-webkit-backdrop-filter: blur(2px) brightness(0.95) opacity(1);
		backdrop-filter: blur(2px) brightness(0.95) opacity(1);
		pointer-events: none;
		left: 0;
		top: 0;
	}

	/* .menu-button-container {
		background: none;
		border: none;
		position: absolute;
		top: 10px;
		left: 10px;
	} */

	/* .menu-button {
		width: 200px;
		height: 200px;
	} */

	.content-container {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.iframe-container {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	iframe {
		width: 700px;
		max-width: 80%;
		height: 350px;
	}

	.pop-over {
		bottom: 10px;
		z-index: 9999;
		width: 100%;
	}

	.footer-container {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 10px;
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
