<script>
	export let i;
	export let classList;
	export let hide = true;
	export let size;

	const defaultClasses = 'material-symbols-rounded icon';
</script>

<span
	class={classList ? `material-symbols-rounded icon ${defaultClasses}` : defaultClasses}
	data-icon={i}
	aria-hidden={!!hide}
	style={size && `font-size: ${size}em;`}>{i}</span
>
