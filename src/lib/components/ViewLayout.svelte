<script lang="ts">
	import { viewOffsets, currentView } from '$lib/stores';
	import type { ViewName } from 'src/types';

	export let viewName: ViewName;
	export let topSkew: boolean = false;
	export let botSkew: boolean = false;
	export let background: boolean = false;
	export let height: number | undefined = undefined;

	let viewRef: HTMLElement | undefined;

	$: if (viewRef) {
		viewOffsets.update((offsets) => ({ ...offsets, [viewName]: viewRef?.offsetTop }));
	}
</script>

<section
	id={viewName}
	bind:this={viewRef}
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
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.view-container {
		display: flex;
		width: 100%;
		max-width: 60rem;
		flex-direction: column;
	}
	.background {
		background-color: var(--bg-color);
	}
	.bot-skew {
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
	}
	.top-skew {
		clip-path: polygon(0 5rem, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
