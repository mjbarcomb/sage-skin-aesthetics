<script>
	import { HERO } from '../lib/constants';
	import SrOnly from './SrOnly.svelte';
	import Seal from './Seal.svelte';
	import SparklyText from './SparklyText.svelte';
</script>

<section class="hero" style={`background-image: url(${HERO.images.bg})`}>
	<div class="hero-inner">
		<div class="hero-text">
			<span class="hero-tagline" aria-hidden="true"
				>Where skin <SparklyText
					ariaHidden
					classList="emphasize"
					sparklyTextSize=".5em"
					numberOfSparkles="2">glows</SparklyText
				>
				<br />
				and energy <u class="emphasize" id="flow">flows</u>
			</span>
			<SrOnly text="Where skin glows and energy flows" />
			<h2>
				{HERO.text}
			</h2>
		</div>
		<div class="hero-image">
			<img
				src={HERO.images.main}
				aria-describedby="hero-seal"
				alt="Brianna. Owner, acne expert, and finalist for 2023 acne expert of the year"
			/>
			<div class="hero-seal">
				<Seal
					ariaHidden
					size={260}
					font={0.8}
					emphasizeFirstWord
					text="Brianna • Owner, acne expert, and finalist for 2023 acne expert of the year"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		background-size: 100% 100%;
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
		max-width: var(--content-max-width);
		min-width: 0;
	}

	.hero-text {
		display: grid;
		row-gap: var(--gap);
		@supports (text-wrap: balance) {
			text-wrap: balance;
		}
	}

	.hero-image {
		align-self: end;
		min-width: 550px;
		transition:
			translate 0.3s ease,
			scale 0.3s ease;
	}

	img {
		position: relative;
		z-index: 1;
	}

	.hero-seal {
		position: absolute;
		font-weight: 500;
		translate: 30px -620px;
		scale: 0.8;
		z-index: 0;
		transition:
			translate 0.3s ease,
			scale 0.3s ease;
		color: #bdd9b8;
		will-change: translate, scale;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.hero-tagline {
		font-family: var(--font-secondary);
		font-weight: 600;
		line-height: 1;
		font-size: var(--text-size-clamp-lg);
		line-height: var(--text-size-clamp-lg);
		margin: 0;
		white-space: nowrap;
		text-indent: -0.35ch;
		margin-left: 0.35ch;
	}

	h2 {
		font-size: var(--text-size-clamp-sm);
	}

	.hero-text :global(.emphasize),
	u {
		font-style: italic;
	}

	/* Safari Fix */
	.hero-text :global(.emphasize) {
		padding-left: 0.45ch;
		margin-left: -0.47ch;
	}

	@media screen and (max-width: 460px) {
		h2 {
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

		h2 {
			margin-top: 0.25em;
			max-width: 45ch;
		}
	}

	@media screen and (max-width: 767px) and (max-height: 800px) {
		.hero-image {
			max-width: 280px;
		}

		.hero-seal {
			translate: -80px -300px;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1000px) {
		.hero-image {
			translate: -100px 80px;
		}
		.hero-seal {
			translate: 70px -770px;
		}
	}

	@media screen and (min-width: 1500px) {
		.hero-image,
		.hero-seal {
			scale: 1.15;
		}
		.hero-seal {
			scale: 0.8;
			translate: -30px -600px;
		}
	}

	@media screen and (max-width: 375px) {
		.hero-seal {
			translate: -70px -415px;
			scale: 0.6;
		}
	}

	@media screen and (min-width: 376px) and (max-width: 767px) {
		.hero-seal {
			scale: 0.7;
			translate: -40px -520px;
		}
	}
</style>
