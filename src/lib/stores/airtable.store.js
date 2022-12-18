import { writable } from 'svelte/store';

const PAGE_SIZE = 100;
const BASE_ID = 'appD3hwYVGenIm8MA';
const GUEST_LIST_TABLE_ID_ID = 'tblXMg5rqbfalvvNE';
const GUEST_RESPONSE_ID_ID = 'tbl6RgvFWafpDAXsD';
const AIRTABLE_TOKEN =
	'patiTArYiuwnPg7Le.8229f28144867733f68394bd50d101aa4c3d9896d4e141bf59d0b56b564df0cb';

const createAirtableStore = () => {
	const { subscribe, set } = writable([]);

	return {
		subscribe,
		set,
		fetch: async () => {
			let guests = [];
			let offset = undefined;

			do {
				const pageRecords = await fetch(
					`https://api.airtable.com/v0/${BASE_ID}/${GUEST_LIST_TABLE_ID_ID}?pageSize=${PAGE_SIZE}${
						offset ? `&offset=${offset}` : ''
					}`,
					{
						method: 'GET',
						headers: {
							authorization: `Bearer ${AIRTABLE_TOKEN}`,
							'content-type': 'application/json'
						}
					}
				);

				const guestsFromPageRecords = await pageRecords.json();

				offset = guestsFromPageRecords.offset;

				guests = [...guests, ...guestsFromPageRecords.records];
			} while (offset);

			set(guests.map((guest) => guest.fields));
		},
		save: async (response) => {
			const body = JSON.stringify({ records: [{ fields: response }] });
			try {
				await fetch(`https://api.airtable.com/v0/${BASE_ID}/${GUEST_RESPONSE_ID_ID}`, {
					method: 'POST',
					headers: {
						authorization: `Bearer ${AIRTABLE_TOKEN}`,
						'content-type': 'application/json'
					},
					body
				});
			} catch (error) {
				console.error(error);
			}
		}
	};
};

export const airtableStore = createAirtableStore();
