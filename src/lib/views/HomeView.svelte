<script lang="ts">
	import PersonIcon from '~icons/bi/person-fill';
	import GitHubIcon from '~icons/akar-icons/github-fill';
	import ProjectIcon from '~icons/ant-design/project-filled';
	import LinkedinIcon from '~icons/akar-icons/linkedin-box-fill';
</script>

<h3>Hi, I am</h3>
<h1>Richard Zhu</h1>
<h2>I work with web and data.</h2>

<p>
	I am currently studying Master of IT at UNSW. I am also one of the CSESoc Projects Team. You know
	what I&apos;m most proud of? I&apos;m 1/3 of logicpop.
</p>

<div class="button-container">
	<button
		class="main-button project-button"
		on:click={() => {
			document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
		}}
	>
		My Projects
		<ProjectIcon width={20} height={20} />
	</button>
	<button
		class="main-button about-button"
		on:click={() => {
			document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
		}}
	>
		About Me
		<PersonIcon width={20} height={20} />
	</button>
	<div class="link-container">
		<a href="https://www.linkedin.com/in/richard-zhu-28965421b/">
			<LinkedinIcon width={30} height={30} />
		</a>
		<a href="https://github.com/zijizhu">
			<GitHubIcon width={30} height={30} />
		</a>
	</div>
</div>

<style>
	h3 {
		font-size: 1.5rem;
		margin: 0.5rem 0 0.5rem 0;
		animation: 1s ease 0s normal forwards 1 fadein;
	}
	h1 {
		font-size: 3rem;
		line-height: 1;
		margin: 1rem 0 1rem 0;
		animation: 2s ease 0s normal forwards 1 fadein;
	}
	h2 {
		font-size: 2rem;
		margin: 0.5rem 0 0.5rem 0;
		color: var(--primary-color);
		animation: 2.5s ease 0s normal forwards 1 fadein;
	}
	p {
		font-size: 1.25rem;
		animation: 2.5s ease 0s normal forwards 1 fadein;
	}
	@media (min-width: 640px) {
		h1 {
			font-size: 4rem;
		}
		p {
			font-size: 1.5rem;
		}
	}

	.button-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 1rem 0 1rem 0;
		animation: 3s ease 0s normal forwards 1 slidein;
	}
	@media (min-width: 640px) {
		.button-container {
			flex-direction: row;
			align-items: center;
		}
	}

	.main-button {
		min-width: 10rem;
		padding: 0.5rem 0.75rem 0.5rem 0.75rem;
		margin: 0.5rem 1rem 0.5rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: var(--theme-radius);
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

	.link-container {
		display: flex;
		padding-top: 1rem;
	}
	@media (min-width: 640px) {
		.link-container {
			padding-top: 0;
			padding-left: 1rem;
		}
	}
	.link-container a {
		display: flex;
		align-items: center;
		margin-right: 1rem;
		color: var(--text-color);
		transition-duration: var(--transition-time);
	}
	.link-container a:hover {
		color: var(--primary-color);
	}
</style>
