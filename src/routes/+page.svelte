<script>
	export let data;

	import Announcement from './Announcement.svelte';
	import Hero from './Hero.svelte';
	import Section from './Section.svelte';
	import MarqueeTextWidget from 'svelte-marquee-text-widget';
</script>

<svelte:head>
	<title>Sage Skin Aesthetics - Esthetician located in Tampa, Florida</title>
	<meta name="description" content="Svelte demo app" />
	<script src="/src/lib/sparkly-text.js"></script>
</svelte:head>

<Hero />

<Section flush classList="marquee">
	<MarqueeTextWidget repeat={2} duration={28}>
		Amet laboris voluptate elit culpa nisi aute aute irure anim aute eu ex
		reprehenderit.&nbsp;💚&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
		nam? Inventore odio nulla mollitia modi assumenda.&nbsp;✨&nbsp;
	</MarqueeTextWidget>
</Section>
<Announcement announcement={data.data} />

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
