<script>
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Header from '../components/Header.svelte';
	import BookAppointment from '../components/BookAppointment.svelte';
	import Announcement from '../components/Announcement.svelte';
	import './styles.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

{#if $page.url.pathname === '/studio'}
	<slot />
{:else}
	<div class="app">
		<Header />

		<main>
			<slot />
		</main>
		<BookAppointment />
		<Announcement />
		<footer></footer>
	</div>
{/if}
