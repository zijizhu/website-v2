<script lang="ts">
	export let height: number | undefined = undefined;
	export let topSkew: boolean = false;
	export let botSkew: boolean = false;
	export let background: boolean = false;
</script>

<section
	style:height={height && `${height}rem`}
	class:top-skew={topSkew}
	class:bot-skew={botSkew}
	class:background
>
	<div class="view-container">
		<slot />
	</div>
</section>

<style>
	section {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.view-container {
		display: flex;
		width: 100%;
		max-width: 52rem;
		flex-direction: column;
	}
	.background {
		background-color: var(--bg-color);
	}
	.bot-skew {
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
	}
	.top-skew {
		clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
