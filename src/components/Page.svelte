<div class="main-inner">
	<slot />
</div>

<style>
	.main-inner {
		justify-self: center;
		width: 100%;
		max-width: var(--content-max-width);
		padding: 0 var(--gap-lg) var(--gap-lg);
	}
</style>
