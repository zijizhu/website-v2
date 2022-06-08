<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let navLinks: { name: string; href: string }[] = [
		{ name: 'Home', href: '#home' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'About', href: '#about' }
	];

	let showNav = true;
	let lastScrollY = 0;

	onMount(() => {
		function onScroll() {
			if (window === undefined) return;
			if (window.scrollY > lastScrollY) {
				showNav = false;
			} else {
				showNav = true;
			}
			lastScrollY = window.scrollY;
		}
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

{#if showNav}
	<div class="container" transition:fly={{ y: -10, duration: 300 }}>
		{#each navLinks as navItem}
			<a href={navItem.href}>
				{navItem.name}
				<div class="indicator" />
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
