<script>
	export let classList;
	export let color;
	export let flush;
</script>

<section class={classList && classList} data-flush={!!flush} style="--section-color: {color}">
	<slot />
</section>

<style>
	section {
		padding: var(--gap-lg);
	}
	section[data-flush='false'] {
		border-radius: 100px;
		background-color: var(--section-color);
	}
</style>
