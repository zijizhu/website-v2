<script lang="ts">
	import ViewLayout from '$lib/components/ViewLayout.svelte';
	import HomeView from '$lib/views/HomeView.svelte';
	import ProjectView from '$lib/views/ProjectView.svelte';
</script>

<svelte:head>
	<title>Richard Zhu</title>
	<meta name="description" content="Zhijie Zhu's portfolio website" />
</svelte:head>

<ViewLayout background botSkew height={40}>
	<HomeView />
</ViewLayout>

<ViewLayout>
	<ProjectView />
</ViewLayout>
