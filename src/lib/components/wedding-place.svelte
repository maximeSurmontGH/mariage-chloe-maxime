<script>
	import PhotoCarousel from './photo-carousel.svelte';
	import PageLayout from './page-layout.svelte';
	import Spacer from './spacer.component.svelte';

	let photos = ['wedding-place-2.jpeg', 'wedding-place-3.jpeg', 'wedding-planning.png'];
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
			<text x="90" y="26" font-size="20" fill="white"> Le mariage </text>
		</svg>
	</svelte:fragment>

	<svelte:fragment slot="main-content">
		<div class="p-10">
			<p class="text-centered">
				On vous attend nombreux à :
				<br />
				<br />
				la CENSE DES SOURCES.
				<br />
				Chemin du Vieux Comté
				<br />
				Tournai, Belgique
			</p>

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

			<p class="text-centered">
				Pour être certain de ne pas vous tromper d'endroit, vous pouvez cliquer <a
					href="https://www.google.com/maps?q=cense+des+sources&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjM5uqQm5j8AhXETKQEHVdDDx8Q_AUoAnoECAEQBA"
					target="_blank">ici</a
				> pour accéder à Google Maps.
			</p>

			<div class="header-content-content">
				<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg" class="title">
					<polygon fill="var(--pink)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
					<text x="85" y="26" font-size="20" fill="white"> Le planning </text>
				</svg>
			</div>

			<div class="text-centered">
				<Spacer />
				<img src={photos[2]} alt="wedding planning" on:click={() => setDisplayCarousel(2)} />
				<Spacer height={15} />
			</div>

			<div class="header-content-content">
				<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg" class="title">
					<polygon fill="var(--pink)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
					<text x="65" y="26" font-size="20" fill="white"> Des idées cadeaux </text>
				</svg>
			</div>

			<p class="text-centered">
				Si vous cherchez une inspiration cadeau, on vous a préparé quelques idées !
			</p>
			<p class="text-centered">
				On vous laisse découvrir la liste en cliquant <a
					href="https://www.millemercismariage.com/pellemont/liste.html"
					target="_blank">ici</a
				>. (on mettra la liste à jour si elle est prise d'assaut!)
			</p>
			<p class="text-centered">
				Sachez que pour nous, c'est votre présence qui est le plus beau des cadeaux.
			</p>

			<div class="text-centered">
				<a href="https://www.millemercismariage.com/pellemont/liste.html" target="_blank"
					><img src="wedding-list.png" alt="wedding planning" width="200" /></a
				>
			</div>

			<p class="text-centered">Et évidemment, si vous avez déjà une idée, surprenez-nous !</p>
		</div>
	</svelte:fragment>
</PageLayout>

<style>
	img {
		width: 50%;
		border: 5px solid white;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		cursor: zoom-in;
	}

	.picture-1 {
		transform: rotate(8deg);
		position: absolute;
		width: 80%;
	}

	.picture-2 {
		transform: rotate(-5deg);
	}

	.header-content-content {
		position: sticky;
		top: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		width: 100%;
		z-index: 2;
	}
</style>
