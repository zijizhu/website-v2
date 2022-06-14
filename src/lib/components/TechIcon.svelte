<script lang="ts">
	import type { IconName } from 'src/types';
	import { windowWidth } from '$lib/stores';
	import Icon from '$lib/components/Icon.svelte';

	export let techName: string;
	export let iconName: IconName;
	export let techLink: string;

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

{#if $windowWidth < 768}
	<a href={techLink} class="tech-icon">
		<Icon name={iconName} />
	</a>
{:else}
	<div
		use:clickOutside
		on:click={() => (showName = true)}
		on:outclick={() => (showName = false)}
		class="tech-icon"
		class:tech-icon-active={showName}
	>
		<Icon name={iconName} />
		{#if showName}
			<a href={techLink} class="tech-name">{techName}</a>
		{/if}
	</div>
{/if}

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
		transition-duration: var(--transition-time);
	}
	.tech-name:hover {
		color: var(--primary-color);
	}
</style>
