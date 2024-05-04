<script>
	export let data;
	import Hero from '../components/Hero.svelte';
</script>

<svelte:head>
	<title>Sage Skin Aesthetics - Esthetician located in Tampa, Florida</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />

<style>
	.marquee {
		background: url(/mesh-459.webp);
		font-size: var(--text-size-90);
		font-weight: 500;
		letter-spacing: 2px;
		text-transform: uppercase;
		height: 64px;
		display: flex;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
	}
</style>
