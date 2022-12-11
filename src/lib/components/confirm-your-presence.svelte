<script>
	import PageLayout from './page-layout.svelte';
	import Spacer from './spacer.component.svelte';

	let ceremonyAndCocktail = true;
	let dinner = true;
	let bounce = true;
	let name = '';
	let adultCount = 0;
	let childCount = 0;
	let diet = '';
	let allergy = '';
	let comment = '';
</script>

<PageLayout>
	<svelte:fragment slot="header-content">
		<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg" class="title">
			<polygon fill="var(--red)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
			<text x="36.5" y="26" font-size="20" fill="white"> Alors, vous venez ? </text>
		</svg>
	</svelte:fragment>

	<svelte:fragment slot="main-content">
		<div class="content-container flex-centered p-10">
			<div class="self-align-start">Cérémonie et cocktail :</div>
			<Spacer height={10} />
			<div class="flex">
				<input
					checked={ceremonyAndCocktail}
					on:click={() => (ceremonyAndCocktail = !ceremonyAndCocktail)}
					type="checkbox"
					name="horns"
				/>
				<label for="horns">OUI</label>
				<Spacer width={50} />
				<input
					checked={!ceremonyAndCocktail}
					on:click={() => (ceremonyAndCocktail = !ceremonyAndCocktail)}
					type="checkbox"
					name="horny"
				/>
				<label for="horny">NON</label>
			</div>

			<Spacer height={20} />

			<div class="self-align-start">Diner :</div>
			<Spacer height={10} />
			<div class="flex">
				<input checked={dinner} on:click={() => (dinner = !dinner)} type="checkbox" name="horns" />
				<label for="horns">OUI</label>
				<Spacer width={50} />
				<input checked={!dinner} on:click={() => (dinner = !dinner)} type="checkbox" name="horny" />
				<label for="horny">NON</label>
			</div>

			<Spacer height={20} />

			<div class="self-align-start">Rebond du dimanche :</div>
			<Spacer height={10} />
			<div class="flex">
				<input checked={bounce} on:click={() => (bounce = !bounce)} type="checkbox" name="horns" />
				<label for="horns">OUI</label>
				<Spacer width={50} />
				<input checked={!bounce} on:click={() => (bounce = !bounce)} type="checkbox" name="horny" />
				<label for="horny">NON</label>
			</div>

			<Spacer height={20} />

			<div>Nom(s): <input bind:value={name} type="text" class="names-input" /></div>
			<Spacer height={10} />
			<div class="flex">
				<input bind:value={adultCount} type="number" class="small-input" />
				<Spacer width={5} /> Adulte(s) <Spacer width={5} />
			</div>
			<Spacer height={10} />
			<div class="flex">
				<input bind:value={childCount} type="number" class="small-input" />
				<Spacer width={6} /> Enfant(s)
			</div>

			<Spacer height={20} />

			<div>Un régime alimentaire particulier ?</div>
			<textarea bind:value={diet} />

			<Spacer height={20} />

			<div>Des allergies ?</div>
			<textarea bind:value={allergy} />

			<Spacer height={20} />

			<div>Un commentaire ou un petit mot ?</div>
			<textarea bind:value={comment} />

			<Spacer height={30} />

			<button>Envoyez votre réponse</button>

			<Spacer height={20} />

			<p class="text-centered contact-text">
				Si vous avez besoin de nous contacter, vous pouvez nous envoyer email en cliquant <a
					href="mailto: famillepellemont@gmail.com">ici</a
				>
				.
			</p>
		</div>
	</svelte:fragment>
</PageLayout>

<style>
	.names-input {
		width: 200px;
	}
	.small-input {
		width: 70px;
	}
	input {
		padding: 5px;
		border-color: var(--blue-grey);
		border-style: dashed;
		border-radius: 5px;
		border-width: 1px;
	}
	input:focus {
		outline: none !important;
		border-color: var(--blue-grey);
	}
	textarea {
		width: calc(100% - 20px);
		padding: 10px;
		margin-top: 5px;
		border-color: var(--blue-grey);
		border-style: dashed;
		border-radius: 10px;
	}
	textarea:focus {
		outline: none !important;
		border-color: var(--blue-grey);
	}

	button {
		border: none;
		border-radius: 10px;
		width: 100%;
		padding: 10px;
		background-color: var(--blue-fade);
		font-family: AmericanTypewriter;
		font-size: 20px;
		color: white;
		cursor: pointer;
	}

	.contact-text {
		font-size: 14px;
	}
</style>
