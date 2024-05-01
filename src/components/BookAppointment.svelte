<script>
	import { BOOKING_LINK } from '../lib/constants';
	import Icon from './Icon.svelte';
</script>

<a class="book-appointment" href={BOOKING_LINK} target="_blank"
	>Book Now<Icon i="open_in_new" size={0.9} /></a
>

<style>
	a {
		position: fixed;
		inset: auto var(--gap) var(--gap) auto;
		box-shadow: var(--shadow-elevation-high);
		border-radius: 50px;
		font-size: var(--text-size-200);
		cursor: pointer;
		font-weight: 500;
		background: #478d00;
		color: var(--ui-color-white);
		text-decoration: none;
		padding: 0 var(--gap);
		height: 52px;
		display: flex;
		align-items: center;
		column-gap: 8px;
	}
	a :global(.icon) {
		font-weight: 500;
		translate: 0 0.5px;
	}
</style>
