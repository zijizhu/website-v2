<script lang="ts">
	import { slide } from 'svelte/transition';
	import ChevronIcon from '~icons/akar-icons/chevron-right';

	export let isOpen = true;
	export let title: string;
	export let darkBg: boolean | undefined;

	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<button class:dark-bg={darkBg} on:click={toggleOpen} aria-expanded={isOpen}>
	<div class="icon">
		<ChevronIcon />
	</div>
	{title}
</button>

{#if isOpen}
	<div transition:slide={{ duration: 500 }} class="content-container">
		<slot />
	</div>
{/if}

<style>
	button {
		border: 0;
		width: 100%;
		padding: 1rem;
		display: flex;
		font-size: 1.25rem;
		margin-top: 1rem;
		cursor: pointer;
		align-items: center;
		border-radius: var(--theme-radius);
		background-color: var(--bg-color);
		transition-duration: var(--transition-time);
	}
	button:hover {
		background-color: var(--dim-bg-color);
	}
	.dark-bg {
		background-color: var(--dim-bg-color);
	}
	.dark-bg:hover {
		background-color: var(--extra-dim-bg-color);
	}
	.icon {
		display: flex;
		margin-right: 0.5rem;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease-in;
	}
	[aria-expanded='true'] .icon {
		transform: rotate(0.25turn);
	}
	.content-container {
		display: flex;
		flex-direction: column;
		padding: 0.25rem;
	}
</style>
