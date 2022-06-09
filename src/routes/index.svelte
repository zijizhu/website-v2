<script lang="ts">
	import { windowScrollY } from '$lib/stores';
	import HomeView from '$lib/views/HomeView.svelte';
	import AboutView from '$lib/views/AboutView.svelte';
	import ProjectView from '$lib/views/ProjectView.svelte';
	import ViewLayout from '$lib/components/ViewLayout.svelte';
</script>

<svelte:head>
	<title>Richard Zhu</title>
	<meta name="description" content="Zhijie Zhu's portfolio website" />
</svelte:head>

<svelte:window bind:scrollY={$windowScrollY} />

<ViewLayout viewName="home" background botSkew height={40}>
	<HomeView />
</ViewLayout>

<ViewLayout viewName="projects">
	<ProjectView />
</ViewLayout>

<ViewLayout viewName="about" background topSkew>
	<AboutView />
</ViewLayout>
