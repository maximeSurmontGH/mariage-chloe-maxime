<script>
	import PageLayout from './page-layout.svelte';
	import PhotoCarousel from './photo-carousel.svelte';
	import Spacer from './spacer.component.svelte';

	let photos = ['us-street.jpg', 'us-street-2.jpg', 'us-canada.JPG', 'us-hands.jpg'];
	let displayCarousel = false;
	let photoToDisplayIndex = '';

	const setDisplayCarousel = (photoToSet) => {
		displayCarousel = true;
		photoToDisplayIndex = photoToSet;
	};
</script>

{#if displayCarousel}
	<PhotoCarousel bind:photos bind:photoToDisplayIndex bind:displayCarousel />
{/if}

<PageLayout>
	<svelte:fragment slot="header-content">
		<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg" class="title">
			<polygon fill="var(--red)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
			<text x="55" y="26" font-size="20" fill="white"> A propos de nous </text>
		</svg>
	</svelte:fragment>

	<svelte:fragment slot="main-content">
		<div class="content-container flex-centered p-10">
			<div class="pictures-container flex-centered">
				<img
					class="picture-1"
					src={photos[1]}
					alt="chloé et maxime"
					on:click={() => setDisplayCarousel(1)}
				/>
				<img
					class="picture-2"
					src={photos[0]}
					alt="chloé et maxime"
					on:click={() => setDisplayCarousel(0)}
				/>
			</div>

			<Spacer />
			<p class="text-centered">
				Notre histoire commence en 2015, quand nous nous rencontrons en école d’ingénieur. Après
				plusieurs tentatives d’approches incomprises par Maxime, le 9 avril, nous échangeons notre
				premier baiser. Et à partir de ce moment-là, nous ne serons jamais bien loin de l'autre.
			</p>
			<p class="text-centered">
				A notre retour du Canada en 2018, nous emménageons dans un charmant appartement lillois dans
				lequel nous avons continué notre petite vie.
			</p>
			<img
				class="picture-3"
				src={photos[2]}
				alt="chloé et maxime"
				on:click={() => setDisplayCarousel(2)}
			/>

			<p class="text-centered">
				Après cette expérience concluante et 2 CDI en poche, nous achetons notre maison à Lille !
				Nous y avons fait couler beaucoup de sueurs pour en faire notre petit cocon. Confinés mais
				heureux, nous adoptons Pixies, un chat presque mignon pour compléter notre petite famille.
			</p>
			<p class="text-centered">
				Et si vous êtes invités au plus beau mariage de l'année 2023, c'est qu'en 2021, Maxime fait
				(enfin) sa demande en mariage et un énorme "OUI" retentit.
			</p>
			<p class="text-centered">
				En bref, vous êtes invité au mariage d’une jeune Picarde et d’un beau Lillois qui filent le
				parfait amour depuis un peu plus de 7 ans.
			</p>
			<img
				class="picture-4"
				src={photos[3]}
				alt="chloé et maxime"
				on:click={() => setDisplayCarousel(3)}
			/>
			<p />
		</div>
	</svelte:fragment>
</PageLayout>

<style>
	.pictures-container {
		position: relative;
	}

	img {
		width: 50%;
		border: 5px solid white;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		cursor: zoom-in;
	}

	.picture-1 {
		transform: rotate(7deg);
		position: absolute;
	}

	.picture-2 {
		transform: rotate(-5deg);
	}

	.picture-3 {
		transform: rotate(3deg);
	}

	.picture-4 {
		width: 80%;
		transform: rotate(5deg);
	}

	video {
		width: 50%;
		width: 300px;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		object-fit: fill;
	}
</style>
