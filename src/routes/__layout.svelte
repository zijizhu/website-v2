<script lang="ts">
	import '../app.css';
	import { windowScrollY, windowWidth } from '$lib/stores';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:window bind:scrollY={$windowScrollY} bind:innerWidth={$windowWidth} />

<main>
	<slot />
</main>

<Footer />
