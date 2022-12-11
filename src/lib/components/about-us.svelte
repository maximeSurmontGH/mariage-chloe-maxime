<script>
	import PageLayout from './page-layout.svelte';
	import Spacer from './spacer.component.svelte';
</script>

<PageLayout>
	<svelte:fragment slot="header-content">
		<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg" class="title">
			<polygon fill="var(--red)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
			<text x="55" y="26" font-size="20" fill="white"> A propos de nous </text>
		</svg>
	</svelte:fragment>

	<svelte:fragment slot="main-content">
		<div class="content-container flex-centered p-10">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video autoplay loop class="shadow">
				<source src="about-us.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

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
			<p class="text-centered">
				Après cette expérience concluante et 2 CDI en poche, nous achetons notre maison à Lille !
				Nous y avons fait couler beaucoup de sueurs pour en faire notre petit cocon. Confinés mais
				heureux, nous adoptons Pixies, un chat presque mignon pour compléter notre petite famille.
			</p>
			<p class="text-centered">
				Et si vous êtes invités au plus beau mariage de l'année 2022, c'est qu'en 2021, Maxime fait
				(enfin) sa demande en mariage et un énorme "OUI" retentit.
			</p>
			<p class="text-centered">
				En bref, l’histoire d’amour d’une jeune Picarde et d’un beau Lillois qui filent le parfait
				amour depuis un peu plus de 7 ans.
				<br />
				Et vous êtes invités à venir le célébrer avec nous.
			</p>
		</div>
	</svelte:fragment>
</PageLayout>

<style>
	video {
		width: 50%;
		width: 300px;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		object-fit: fill;
	}
</style>
