<script>
	import PageLayout from './page-layout.svelte';
	import Spacer from './spacer.component.svelte';
	import Loader from './loader.svelte';
	import stringSimilarity from 'string-similarity';
	import { airtableStore } from '../stores/airtable.store';
	import { slide } from 'svelte/transition';
	import { testStringSimilarity } from '../utils/string.utils';
	import { fade } from 'svelte/transition';
	import { confetti } from '@neoconfetti/svelte';
	import { tick } from 'svelte';

	let guest = undefined;
	let guestNameSearchInput = '';
	let guestNames = [];
	let displayConfetti = false;

	// const accompanyingRegex = new RegExp(/(mr)|(Mr)|(mme)|(Mme)|(Fille)|(\+1)/, 'g');
	const accompanyingRegex = new RegExp(/(Fille)|(\+1)/, 'g');

	$: guestNamesSimilarity = guestNameSearchInput
		? stringSimilarity.findBestMatch(guestNameSearchInput?.toUpperCase() || '', guestNames)
		: undefined;

	$: filteredGuests = $airtableStore
		.sort((guestA, guestB) =>
			`${guestA.first_name} ${guestA.last_name}`.localeCompare(
				`${guestB.first_name} ${guestB.last_name}`
			)
		)
		.filter(
			(guest) =>
				guest.first_name &&
				guest.last_name &&
				testStringSimilarity(
					`${guest.first_name} ${guest.last_name}`,
					guestNameSearchInput,
					guestNamesSimilarity?.bestMatch?.rating
				)
		)
		.map((guest) => ({
			...guest,
			first_name: guest.first_name.replace(accompanyingRegex, ''),
			last_name: guest.last_name
		}));

	const fetchGuestsList = async () => {
		await airtableStore.fetch();
		guestNames = $airtableStore.map(
			({ first_name, last_name }) => `${first_name?.toUpperCase()} ${last_name?.toUpperCase()}`
		);
		clearFields();
	};

	$: isButtonDisabled = !name || !adultCount;

	let ceremonyAndCocktail = true;
	let dinner = true;
	let bounce = true;
	let name = '';
	let adultCount = 0;
	let childCount = 0;
	let diet = '';
	let allergy = '';
	let comment = '';

	const clearFields = () => {
		guest = undefined;
		guestNameSearchInput = '';
		ceremonyAndCocktail = true;
		dinner = true;
		bounce = true;
		name = '';
		adultCount = 0;
		childCount = 0;
		diet = '';
		allergy = '';
		comment = '';
	};

	let responseSend = false;

	const sendResponse = async () => {
		await airtableStore.save({
			ceremonyAndCocktail,
			dinner,
			bounce,
			name,
			adultCount,
			diet,
			allergy,
			comment
		});
		responseSend = true;
		clearFields();
		displayConfetti = false;
		await tick();
		displayConfetti = true;
	};
</script>

{#if displayConfetti}
	<div style="position: absolute; left: 0;" use:confetti />
	<div style="position: absolute; right: 0;" use:confetti />
{/if}

{#await fetchGuestsList()}
	<span transition:fade>
		<PageLayout>
			<svelte:fragment slot="header-content">
				<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg" class="title">
					<polygon fill="var(--red)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
					<text x="36.5" y="26" font-size="20" fill="white"> Alors, vous venez ? </text>
				</svg>
			</svelte:fragment>

			<svelte:fragment slot="main-content">
				<div class="content-container flex-centered p-10">
					<Loader />
				</div>
			</svelte:fragment>
		</PageLayout>
	</span>
{:then}
	<span transition:fade>
		<PageLayout>
			<svelte:fragment slot="header-content">
				<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg" class="title">
					<polygon fill="var(--red)" points="0,0 300,0 280,20 300,40 0,40 20,20" />
					<text x="36.5" y="26" font-size="20" fill="white"> Alors, vous venez ? </text>
				</svg>
			</svelte:fragment>

			<svelte:fragment slot="main-content">
				<div class="content-container flex-centered p-10">
					{#if responseSend}
						<p transition:fade>Ta réponse a bien été prise en compte. À très bientôt !</p>
					{:else if !guest}
						<input
							bind:value={guestNameSearchInput}
							class="w-100"
							type="text"
							placeholder="Qui es tu ? (ton nom prénom)"
						/>

						{#if guestNameSearchInput.length > 2 && filteredGuests.length > 0}
							<div class="cursor-pointer filter-options-container" in:slide>
								{#each filteredGuests as filteredGuest}
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<p
										class="filter-option"
										on:click={() => {
											guest = filteredGuest;
											name = `${
												filteredGuest.first_name
											} ${filteredGuest.last_name?.toUpperCase()}`;
										}}
									>
										{`${filteredGuest.first_name} ${filteredGuest.last_name?.toUpperCase()}`}
									</p>
								{/each}
							</div>
						{:else if guestNameSearchInput.length > 3 && filteredGuests.length === 0}
							<p class="not-found-container" in:slide>
								Oups ! On ne t'a pas trouvé , le développeur ne doit pas être très doué ! <Spacer />
								Essaies avec une autre orthographe ou changer le sens nom/prénom, sinon tu devras répondre
								avec le bordereau de réponse !
							</p>
						{/if}
					{:else}
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

						{#if guest.dinner}
							<Spacer height={20} />

							<div class="self-align-start">Diner :</div>
							<Spacer height={10} />
							<div class="flex">
								<input
									checked={dinner}
									on:click={() => (dinner = !dinner)}
									type="checkbox"
									name="horns"
								/>
								<label for="horns">OUI</label>
								<Spacer width={50} />
								<input
									checked={!dinner}
									on:click={() => (dinner = !dinner)}
									type="checkbox"
									name="horny"
								/>
								<label for="horny">NON</label>
							</div>
						{/if}

						{#if guest.bounce}
							<Spacer height={20} />

							<div class="self-align-start">Rebond du dimanche :</div>
							<Spacer height={10} />
							<div class="flex">
								<input
									checked={bounce}
									on:click={() => (bounce = !bounce)}
									type="checkbox"
									name="horns"
								/>
								<label for="horns">OUI</label>
								<Spacer width={50} />
								<input
									checked={!bounce}
									on:click={() => (bounce = !bounce)}
									type="checkbox"
									name="horny"
								/>
								<label for="horny">NON</label>
							</div>
						{/if}

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

						<button disabled={isButtonDisabled} on:click={sendResponse}
							>Envoyez votre réponse</button
						>

						<Spacer height={20} />

						<p class="text-centered contact-text">
							Si vous avez besoin de nous contacter, vous pouvez nous envoyer email en cliquant <a
								href="mailto: famillepellemont@gmail.com">ici</a
							>
							.
						</p>
					{/if}
				</div>
			</svelte:fragment>
		</PageLayout>
	</span>
{/await}

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
		font-size: 16px;
		font-family: AmericanTypewriter;
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
		font-size: 16px;
		font-family: AmericanTypewriter;
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
	}

	button:hover {
		background-color: var(--blue-grey);
	}

	button:disabled {
		opacity: 0.4s;
		cursor: no-drop;
	}

	button:disabled:hover {
		background-color: var(--blue-fade);
	}

	.contact-text {
		font-size: 14px;
	}

	.filter-options-container,
	.not-found-container {
		height: 220px;
		overflow: scroll;
	}

	.filter-option {
		padding: 0;
		margin: 0;
		padding: 10px;
	}

	.filter-option:hover {
		background-color: var(--blue);
		color: white;
	}
</style>
