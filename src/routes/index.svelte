<script lang="ts">
	import ViewLayout from '$lib/ViewLayout.svelte';
	import HomeView from '$lib/views/HomeView.svelte';
	import ProjectView from '$lib/views/ProjectView.svelte';
</script>

<ViewLayout background botSkew height={40}>
	<HomeView />
</ViewLayout>

<ViewLayout>
	<ProjectView />
</ViewLayout>
