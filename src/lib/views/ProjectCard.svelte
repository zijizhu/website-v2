<script lang="ts">
	export let imgPos: 'left' | 'right' = 'right';
</script>

<div class="container" class:container-reverse={imgPos === 'right'}>
	<div>s</div>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 0 1rem 0;
	}
	@media (min-width: 768px) {
		.container {
			flex-direction: row;
		}
		.container-reverse {
			flex-direction: row-reverse;
		}
	}
</style>
