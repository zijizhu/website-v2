<script lang="ts">
	import type { IconName } from 'src/types';
	import Icon from '$lib/components/Icon.svelte';

	export let techName: string;
	export let iconName: IconName;

	let showName = false;
</script>

<div
	on:mouseleave={() => (showName = false)}
	on:mouseenter={() => (showName = true)}
	class="tech-icon"
>
	<Icon name={iconName} />
	{#if showName}
		{techName}
	{/if}
</div>

<style>
	.tech-icon {
		display: flex;
		align-items: center;
		margin-right: 0.5rem;
		padding: 0.25rem;
		transition-duration: var(--transition-time);
	}
	.tech-icon:hover {
		padding-right: 1rem;
		border-radius: var(--theme-radius);
		background-color: var(--dim-bg-color);
	}
</style>
