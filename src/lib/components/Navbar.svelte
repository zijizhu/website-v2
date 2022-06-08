<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import type { ViewName } from 'src/types';
	import { currentView } from '$lib/stores';
	import { windowScrollY } from '$lib/stores';

	const navLinks: { view: ViewName; name: string; href: string }[] = [
		{ view: 'home', name: 'Home', href: '#home' },
		{ view: 'projects', name: 'Projects', href: '#projects' },
		{ view: 'about', name: 'About', href: '#about' }
	];

	let ready = false;
	let showNav = true;
	let lastScrollY = 0;

	onMount(() => {
		setTimeout(() => {
			ready = true;
		}, 1000);
	});

	$: {
		if ($windowScrollY > lastScrollY) {
			showNav = false;
		} else {
			showNav = true;
		}
		lastScrollY = $windowScrollY;
	}
</script>

{#if ready && showNav}
	<div class="container" transition:fly={{ y: -10, duration: 300 }}>
		{#each navLinks as navItem}
			<a
				href={navItem.href}
				on:click={() =>
					document.getElementById(navItem.view)?.scrollIntoView({ behavior: 'smooth' })}
			>
				{navItem.name}
				{#if $currentView === navItem.view}
					<div class="indicator" />
				{/if}
			</a>
		{/each}
	</div>
{/if}

<style>
	.container {
		position: fixed;
		right: 0;
		display: flex;
		margin: 1rem;
		user-select: none;
		padding: 0.5rem 1rem 0.25rem 1rem;
		background-color: var(--dim-bg-color);
		border-radius: var(--theme-radius);
		z-index: 20;
	}
	.container a {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1rem;
		margin: 0 0.75rem 0 0.75rem;
		transition-duration: var(--transition-time);
	}
	@media (min-width: 768px) {
		.container a {
			font-size: 1.25rem;
			margin: 0 1rem 0 1rem;
		}
	}
	.container a:hover {
		color: var(--primary-color);
	}
	.indicator {
		width: 1.5rem;
		height: 0.25rem;
		margin: 0.25rem 0 0.25rem 0;
		border-radius: var(--theme-radius);
		background-color: var(--primary-color);
	}
</style>
