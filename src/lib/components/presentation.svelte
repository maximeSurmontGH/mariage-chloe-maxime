<script>
	import PageLayout from './page-layout.svelte';
	import Spacer from './spacer.component.svelte';
</script>

<PageLayout>
	<svelte:fragment slot="main-content">
		<div class="full-height flex-centered p-10">
			<img src="/logo-mariage.png" alt="logo mariage" />
			<Spacer height={20} />
			<p class="p-m-0 text-centered font-kingthings-typewriter">
				Vous êtes invités à célébrer la mariage de
			</p>
			<Spacer height={10} />
			<p class="p-m-0 text-centered font-kingthings-typewriter">
				<span style="font-size: 36px;">CHLOÉ + MAXIME</span>
			</p>
			<p class="p-m-0 text-centered font-kingthings-typewriter flex">
				PELLE<span style="color: var(--blue-fade)">tier</span>
				<Spacer width={60} /> <span style="color: var(--blue-fade)">sur</span>MONT<Spacer
					width={45}
				/>
			</p>
			<Spacer height={20} />
			<svg
				width="300"
				height="40"
				xmlns="http://www.w3.org/2000/svg"
				class="font-kingthings-typewriter "
			>
				<polygon fill="var(--red)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
				<text x="40" y="26" font-size="20" fill="white"> samedi 10 juin 2023 </text>
			</svg>
		</div>
	</svelte:fragment>
</PageLayout>

<style>
	img {
		width: 50%;
		min-width: 300px;
		max-width: 400px;
		margin-top: -20px;
	}
</style>
