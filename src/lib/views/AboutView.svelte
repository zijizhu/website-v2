<script lang="ts">
	import Accordion from '$lib/components/Accordion.svelte';
</script>

<h1>More About Me</h1>

<p class="strong">Education</p>
<p>
	- Bachelor of Science (Computer Science) @UNSW (2019-2021) <br />
	- Master of Information Technology @UNSW (2022)
</p>
<p class="strong">Experiences</p>
<p>
	- Former HSC Math 3U/4U Tutor @Uwin Edu (2019-2021) <br />
	- UNSW CSESoc Projects Team (2022)
</p>

<h2>Academic Highlights</h2>

<div class="animation-wrapper">
	<Accordion darkBg title="UNSW Computer Science">hello</Accordion>
</div>

<style>
	h1 {
		line-height: 1;
		font-size: 2.5rem;
		margin: 5rem 0 1rem 0;
		animation: 3s ease 0s normal forwards 1 fadein;
	}
	p {
		font-size: 1.25rem;
		margin: 0.5rem 0 0.5rem 0;
		animation: 3s ease 0s normal forwards 1 fadein;
	}
	.strong {
		font-weight: 700;
	}
	h2 {
		animation: 3s ease 0s normal forwards 1 fadein;
	}
	.animation-wrapper {
		animation: 3s ease 0s normal forwards 1 fadein;
	}
</style>
