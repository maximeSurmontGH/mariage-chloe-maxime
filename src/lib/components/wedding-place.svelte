<script>
	import PageLayout from './page-layout.svelte';
</script>

<PageLayout>
	<svelte:fragment slot="header-content">
		<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg" class="title">
			<polygon fill="var(--red)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
			<text x="90" y="26" font-size="20" fill="white"> Le mariage </text>
		</svg>
	</svelte:fragment>

	<svelte:fragment slot="main-content">
		<p class="text-centered">
			Le mariage prend place à la CENSE DES SOURCES.
			<br />
			Chemin du Vieux Comté
			<br />
			Tournai Belgique
		</p>
		<p class="text-centered">
			Si vous cherchez une inspiration de cadeau, on vous à préparé quelques idées (on mettra la
			liste à jours si elle est prise d'assaut!)
		</p>
	</svelte:fragment>
</PageLayout>

<style>
</style>
