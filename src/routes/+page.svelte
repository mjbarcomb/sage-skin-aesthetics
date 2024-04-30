<script>
	export let data;
	import Hero from '../components/Hero.svelte';
	import Section from '../components/Section.svelte';
	import MarqueeTextWidget from 'svelte-marquee-text-widget';
</script>

<svelte:head>
	<title>Sage Skin Aesthetics - Esthetician located in Tampa, Florida</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />

<Section flush classList="marquee">
	<MarqueeTextWidget repeat={10} duration={10}>
		Radiant skin, renewed energy ✨ Healthy glow, happy mind ✨
	</MarqueeTextWidget>
</Section>

<style>
	:global(section.marquee) {
		background: url('/mesh-459.webp');
		padding: var(--gap) 0;
		font-size: var(--text-size-100);
		font-weight: 500;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
</style>
