<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Accordion from '$lib/Accordion.svelte';
</script>

<h1>Projects 💻</h1>

<h2>Check out a few projects I've involved in</h2>

<Accordion title="Software Projects">
	<ProjectCard />
	<ProjectCard />
	<ProjectCard />
</Accordion>

<ProjectCard />
<ProjectCard />
<ProjectCard />

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
