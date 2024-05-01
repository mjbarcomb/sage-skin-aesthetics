<script>
	import Icon from './Icon.svelte';

	export let asButton = false;
	export let href;
	export let newTab = false;
</script>

<a data-button={asButton ? '' : undefined} {href} target={newTab && '_blank'}>
	<slot />
	{#if newTab}
		<Icon i="open_in_new" size={0.9} />
	{/if}
</a>

<style>
	a {
		font-size: 1em;
		cursor: pointer;
		color: var(--ui-color-white);
		display: flex;
		align-items: center;
		column-gap: 8px;
		text-decoration: wavy 2px var(--ui-color-white);
	}
	[data-button] {
		text-decoration: none;
		border-radius: 50px;
		font-size: var(--text-size-200);
		font-weight: 500;
		background: var(--color-white);
		color: var(--color-black);
		padding: 0 var(--gap);
		height: 52px;
	}
	a :global(.icon) {
		font-weight: 500;
		translate: 0 0.5px;
	}
</style>
