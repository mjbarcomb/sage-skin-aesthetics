<script>
	import Header from '../components/Header.svelte';
	import BookAppointment from '../components/BookAppointment.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	<BookAppointment />
	<footer></footer>
</div>
