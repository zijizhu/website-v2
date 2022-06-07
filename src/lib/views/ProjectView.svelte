<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import projects from '$lib/data/projects';
</script>

<h1>Projects 💻</h1>

<h2>Check out a few projects I've involved in</h2>

<Accordion title="Mobile and Web Apps">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</Accordion>

<style>
	h1 {
		font-size: 2rem;
		line-height: 1;
		margin: 1rem 0 1rem 0;
	}
	h2 {
		color: var(--primary-color);
	}
</style>
