<script>
	export let numberOfSparkles = 3;
	export let classList;
	export let sparklyTextSize = '1em';
	export let sparkleAnimLength = 2;
</script>

<sparkly-text
	class={classList}
	number-of-sparkes={numberOfSparkles}
	style={`--sparkly-text-animation-length: ${sparkleAnimLength}s; --sparkly-text-size:${sparklyTextSize}; line-height: 1`}
>
	<slot />
</sparkly-text>
