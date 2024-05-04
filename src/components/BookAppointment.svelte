<script>
	import { BOOKING_LINK } from '../lib/constants';
	import Link from './Link.svelte';
</script>

<div class="book-appointment">
	<Link href={BOOKING_LINK} newTab asButton>Book Now</Link>
</div>

<style>
	.book-appointment :global(a) {
		position: fixed;
		inset: auto var(--gap) var(--gap) auto;
		box-shadow: var(--shadow-elevation-high);
		z-index: 1;
	}
</style>
