<script lang="ts">
	import type { IconName } from 'src/types';
	import Icon from '$lib/components/Icon.svelte';

	export let techName: string;
	export let iconName: IconName;

	let showName = false;

	export function clickOutside(node: Node) {
		const handleClick = (event: MouseEvent) => {
			if (!node.contains(event.target as Node | null)) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<div
	use:clickOutside
	on:click={() => (showName = true)}
	on:outclick={() => (showName = false)}
	class="tech-icon"
	class:tech-icon-active={showName}
>
	<Icon name={iconName} />
	{#if showName}
		<span class="tech-name">{techName}</span>
	{/if}
</div>

<style>
	.tech-icon {
		display: flex;
		align-items: center;
		margin-right: 0.5rem;
		padding: 0.25rem;
		cursor: pointer;
		border-radius: var(--theme-radius);
		transition-duration: var(--transition-time);
	}
	.tech-icon:hover {
		background-color: var(--dim-bg-color);
	}
	.tech-icon-active {
		background-color: var(--dim-bg-color);
	}
	.tech-name {
		margin: 0 0.25rem 0 0.5rem;
	}
</style>
