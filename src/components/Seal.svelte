<script>
	export let speed = 50;
	export let size = 130;
	export let font = 0.7;
	export let text = '';
	export let repeat = 1;
	export let separator = ' • ';

	let array = [];
	$: array = [...Array(repeat)].map((_) => [...text].concat([...separator])).flat();

	const isUpperCase = (string) => /^[A-Z]*$/.test(string);
</script>

<div class="seal" style="--size: {size}px; --speed: {speed * 1000}ms; --font: {font}em">
	{#each array as char, index}
		<div
			data-emphasize={isUpperCase(char) ? '' : undefined}
			class="char"
			style="--angle: {`${(1 / array.length) * index}turn`}"
		>
			{char}
		</div>
	{/each}
</div>

<style>
	@keyframes rotation {
		0% {
			transform: rotate(0turn);
		}
		100% {
			transform: rotate(1turn);
		}
	}
	.seal {
		position: relative;
		width: var(--size);
		height: var(--size);
		border-radius: 100%;
		animation: rotation var(--speed) linear infinite;
		font-size: var(--font);
	}
	.seal div:not([data-emphasize]) {
		opacity: 0.5;
	}
	.char {
		width: 1em;
		height: 100%;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) rotate(var(--angle, 0deg));
		text-align: center;
		text-transform: uppercase;
	}
</style>
