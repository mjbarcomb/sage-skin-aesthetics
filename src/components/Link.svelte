<script>
	import IconOpenInNew from '~icons/material-symbols/open-in-new';
	export let asButton = false;
	export let href;
	export let newTab = false;
</script>

<a data-button={asButton ? '' : undefined} {href} target={newTab && '_blank'}>
	<slot />
	{#if newTab}
		<IconOpenInNew font-size=".8em" />
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
		padding: 0 1.12em;
		height: 2.438em;
		white-space: nowrap;

		&:hover,
		&:focus {
			&::before {
				content: '';
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.075);
			}
		}
		&:focus {
			outline: 2px dotted var(--color-black);
			outline-offset: -4px;
		}
	}
	a :global(.icon) {
		font-weight: 500;
		translate: 0 0.5px;
	}

	@media screen and (max-width: 767px) {
		[data-button] {
			font-size: var(--text-size-100);
		}
	}
</style>
