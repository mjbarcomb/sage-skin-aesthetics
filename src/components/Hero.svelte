<script>
	import { HERO } from '../lib/constants';
	import SparklyText from './SparklyText.svelte';
</script>

<section class="hero">
	<div class="hero-inner">
		<div class="hero-text">
			<h2>
				Where skin <SparklyText classList="emphasize" sparklyTextSize=".5em" numberOfSparkles="2"
					>glows</SparklyText
				>
				<br /><span class="hero-text-line-2"
					>and energy <u class="emphasize" id="flow">flows</u></span
				>
			</h2>
			<h3>
				{HERO.text}
			</h3>
		</div>
		<div class="hero-image">
			<img src={HERO.images.main} height="589" width="465" alt="" />
		</div>
	</div>
</section>

<style>
	.hero {
		background-image: url('/mesh-149.webp');
		background-size: cover;
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
		min-height: 700px;
		max-width: 100vw;
	}

	.hero-inner {
		position: relative;
		display: grid;
		justify-self: center;
		grid-template-columns: 1.5fr 1fr;
		column-gap: var(--gap);
		align-items: center;
		max-width: 1440px;
		min-width: 0;
	}

	.hero-text {
		display: grid;
		row-gap: var(--gap);
		@supports (text-wrap: balance) {
			text-wrap: balance;
		}
	}

	.hero-text-line-2 {
		margin-left: 0.75ch;
	}

	.hero-image {
		align-self: end;
		min-width: 550px;
		transition:
			translate 0.3s ease,
			max-width 0.3s ease;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	h2 {
		font-family: var(--font-secondary);
		line-height: 1;
		font-weight: normal;
		font-size: clamp(2.25rem, 6.009vw + 0.842rem, 6.25rem);
		line-height: clamp(2.25rem, 6.009vw + 0.842rem, 6.25rem);
		margin: 0;
		white-space: nowrap;
	}

	h3 {
		font-size: clamp(1.125rem, 0.8409rem + 1.0101vw, 1.75rem);
	}

	@media screen and (min-width: 768px) and (max-width: 1000px) {
		.hero-image {
			translate: -20% 0;
		}
		h3 {
			max-width: 32ch;
		}
	}

	@media screen and (max-width: 767px) {
		.hero {
			height: calc(90vh - var(--gap-lg));
			height: calc(90svh - var(--gap-lg));
			min-height: 560px;
			text-align: center;
			row-gap: var(--gap-lg);
			padding: 0 var(--gap);
			padding-top: var(--gap-lg);
		}
		.hero .hero-inner {
			grid-template-columns: 1fr;
			justify-items: center;
		}

		.hero-image {
			min-width: 0;
			max-width: 450px;
		}

		h3 {
			margin-top: 0.25em;
			max-width: 45ch;
		}
	}

	@media screen and (max-width: 767px) and (max-height: 700px) {
		.hero-image {
			max-width: 250px;
		}
	}

	@media screen and (max-width: 460px) {
		h3 {
			max-width: 32ch;
		}
	}
</style>
