<script>
	import Accordion from '../../components/Accordion.svelte';
	import PageTitle from '../../components/PageTitle.svelte';
	export let data;
</script>

<PageTitle title="Frequently Asked Questions" />
<Accordion
	><span slot="head">Question 1</span>
	<div slot="details">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad obcaecati, quasi id tempore
		voluptatem deleniti nostrum cupiditate aut iure autem sapiente quas inventore porro? Eaque iste
		maxime rem reiciendis!
	</div></Accordion
>

<style>
</style>
