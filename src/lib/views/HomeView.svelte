<script lang="ts">
	import ProjectIcon from '~icons/ant-design/project-filled';
	import PersonIcon from '~icons/bi/person-fill';
</script>

<h3>Hi, I am</h3>
<h1>Richard Zhu</h1>
<h2>I work with web and data.</h2>

<p>
	I am currently studying Master of IT at UNSW. I am also one of the CSESoc Projects Team. You know
	what I&apos;m most proud of? I&apos;m 1/3 of logicpop.
</p>

<div class="button-container">
	<button class="project-button">My Projects <ProjectIcon width={20} height={20} /></button>
	<button class="about-button">About Me <PersonIcon width={20} height={20} /></button>
</div>

<style>
	h1 {
		font-size: 4rem;
		line-height: 1;
		margin: 1rem 0 1rem 0;
	}
	h2 {
		font-size: 2rem;
		margin: 0.5rem 0 0.5rem 0;
		color: var(--primary-color);
	}
	h3 {
		font-size: 1.5rem;
		margin: 0.5rem 0 0.5rem 0;
	}
	p {
		font-size: 1.5rem;
		font-weight: 500;
	}
	.button-container {
		display: flex;
		margin: 1rem 0 1rem 0;
	}
	.button-container button {
		width: 10rem;
		padding: 0.5rem 0.75rem 0.5rem 0.75rem;
		margin: 0 1rem 0 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.2rem;
		cursor: pointer;
		user-select: none;
		transition-duration: var(--transition-time);
	}
	.project-button {
		border: 2px solid var(--primary-color);
		background-color: var(--primary-color);
		color: var(--white);
	}
	.project-button:hover {
		color: var(--primary-color);
		background-color: var(--dim-bg-color);
	}
	.about-button {
		border: 2px solid var(--text-color);
		background-color: var(--text-color);
		color: var(--white);
	}
	.about-button:hover {
		color: var(--text-color);
		background-color: var(--dim-bg-color);
	}
</style>
