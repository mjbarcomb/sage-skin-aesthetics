<script>
	export let text = '';
	import { HERO } from '../lib/constants';
</script>

<section class="hero" style={`background-image: url(${HERO.images.bg})`}>
	<h2>{text}</h2>
</section>

<style>
	.hero {
		background-size: cover;
		background-position: bottom;
		position: relative;
		padding: 0 var(--gap-lg);
		display: flex;
		justify-content: center;
		max-height: calc(100dvh - var(--gap-lg));
		border-radius: 100px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		overflow: hidden;
		width: 100%;
		min-height: 300px;
		max-width: 100vw;
	}
	h2 {
		font-family: var(--font-secondary);
		font-size: var(--text-size-clamp-md);
		font-weight: 600;
		margin: 0;
		line-height: var(--text-size-clamp-md);
		align-self: center;
	}
</style>
