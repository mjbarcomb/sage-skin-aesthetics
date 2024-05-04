<script>
	import { onMount } from 'svelte';
	import dateFormat, { masks } from 'dateformat';
	import IconClose from '~icons/material-symbols/close';

	import { client } from '../lib/sanityClient';

	let announcement;

	onMount(async () => {
		const query = `*[_type == "announcement"]`;

		try {
			const data = await client.fetch(query);

			announcement = data[0];
		} catch (error) {
			console.error('Error fetching data from Sanity:', error);
		}
	});

	let dialog;
</script>

{#if announcement}
	<dialog open bind:this={dialog}>
		<h3>
			{announcement.title}
		</h3>
		<p class="date">{dateFormat(announcement._updatedAt, masks.mediumDate)}</p>
		<p>{announcement.message}</p>
		<button on:click={() => dialog.close()}><IconClose font-size="1.25em" /></button>
	</dialog>
{/if}

<style>
	dialog {
		align-content: start;
		background-color: rgba(239, 237, 236, 0.9);
		border: 0;
		box-shadow: var(--shadow-elevation-high);
		gap: var(--gap-md);
		padding: var(--gap);
		z-index: 1;
		position: fixed;
		bottom: var(--gap);
		width: 70ch;
		max-width: calc(100vw - (calc(var(--gap) * 2)));
		backdrop-filter: blur(20px) saturate(3.5);
	}
	dialog[open] {
		display: grid;
	}

	button {
		position: absolute;
		inset: var(--gap-sm) var(--gap-sm) auto auto;
		padding: 0;
		height: 42px;
		width: 42px;
		display: grid;
		place-items: center;
		border: 0;
		background-color: transparent;
		color: var(--color-black);

		&:focus {
			outline: 2px dotted currentColor;
		}
	}

	h3 {
		font-size: var(--text-size-200);
		font-weight: 500;
		margin: 0;
		display: flex;
		align-items: center;
		gap: var(--gap-sm);
	}

	dialog :global([data-icon='brand_awareness']) {
		rotate: -45deg;
	}
	.date {
		font-size: var(--text-size-100);
		font-weight: 500;
	}
	p {
		font-size: var(--text-size-200);
		font-weight: 400;
		margin: 0;
		padding-right: 40px;
	}
	@media screen and (max-width: 767px) {
		dialog {
			width: 100%;
			bottom: 0;
			max-width: none;
		}
	}
</style>
