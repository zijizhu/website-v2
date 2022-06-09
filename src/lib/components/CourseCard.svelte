<script lang="ts">
	import type { CourseInfo } from 'src/types';

	export let courseInfo: CourseInfo;
</script>

<div class="course-container">
	<div>
		<a href={courseInfo.link}>{courseInfo.code}</a>
	</div>
	<div class="title">{courseInfo.title}</div>
	<p>{courseInfo.description}</p>
	<div>{courseInfo.mark}</div>
</div>

<style>
	.course-container {
		flex: 1;
		display: flex;
		margin: 0.5rem 0 0.5rem 0;
		padding: 1rem;
		flex-direction: column;
		border-radius: var(--theme-radius);
		background-color: var(--white);
	}
	@media (min-width: 768px) {
		.course-container {
			margin: 0.5rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	a {
		color: var(--primary-color);
	}
	.title {
		font-size: 1.25rem;
		font-weight: 700;
	}
</style>
