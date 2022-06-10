<script lang="ts">
	import SvelteIcon from '~icons/logos/svelte';
</script>

<footer>
	<div>Richard Zhu 2022</div>
	<div class="divider">--</div>
	<div>
		Made with
		<div class="icon-container"><SvelteIcon width={102.4} height={25} /></div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem 0 1.5rem 0;
		background-color: var(--bg-color);
	}
	div {
		display: flex;
		align-items: center;
	}
	.divider {
		margin: 0 1rem 0 1rem;
	}
	.icon-container {
		margin: 0 0.5rem 0 0.5rem;
	}
</style>
