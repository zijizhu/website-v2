<script lang="ts">
	import Accordion from '$lib/components/Accordion.svelte';
	import CourseCard from '$lib/components/CourseCard.svelte';
	import { bcsCourses, mitCourses } from '$lib/data/courses';

	let bcsLink = 'https://www.handbook.unsw.edu.au/undergraduate/programs/2019/3778?year=2019';
	let mitLink = 'https://www.handbook.unsw.edu.au/postgraduate/programs/2022/8543';
	let uwinLink = 'https://www.uwineducation.com.au/';
	let csesocLink = 'https://www.csesoc.unsw.edu.au/';
</script>

<h1>More About Me</h1>

<p class="strong">Education</p>
<p>
	-
	<a class="special-link" href={bcsLink}> Bachelor of Computer Science </a>
	@UNSW (2019-2021) <br />
	-
	<a class="special-link" href={mitLink}> Master of Information Technology </a>
	@UNSW (2022)
</p>

<p class="strong">Experiences</p>
<p>
	- Former HSC Math 3U/4U Tutor
	<a class="special-link" href={uwinLink}> @Uwin Edu </a>
	(2019-2021) <br />
	- UNSW
	<a class="special-link" href={csesocLink}> CSESoc </a>
	Projects Team (2022)
</p>

<h2>Academic Highlights</h2>

<div class="animation-wrapper">
	<Accordion isOpen={false} darkBg title="UNSW Computer Science">
		<div class="courses-container">
			{#each bcsCourses as course}
				<CourseCard courseInfo={course} />
			{/each}
		</div>
	</Accordion>
</div>

<div class="animation-wrapper">
	<Accordion isOpen={false} darkBg title="UNSW Master of IT">
		<div class="courses-container">
			{#each mitCourses as course}
				<CourseCard courseInfo={course} />
			{/each}
		</div>
	</Accordion>
</div>

<h1>Contact Me</h1>

<p style="margin-bottom: 5rem;">
	Feel free to reach me at
	<a class="special-link" href="mailto:zhuzhijie1003@outlook.com">zhuzhijie1003@outlook.com</a>
	at anytime
</p>

<style>
	h1 {
		line-height: 1;
		font-size: 2.5rem;
		margin: 7rem 0 1rem 0;
		animation: 3s ease 0s normal forwards 1 fadein;
	}
	p {
		font-size: 1.25rem;
		margin: 0.5rem 0 0.5rem 0;
		animation: 3s ease 0s normal forwards 1 fadein;
	}
	@media (min-width: 768px) {
		p {
			font-size: 1.25rem;
		}
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
	.courses-container {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	@media (min-width: 768px) {
		.courses-container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
