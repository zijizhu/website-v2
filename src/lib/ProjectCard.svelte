<script lang="ts">
	import LinkIcon from '~icons/akar-icons/link-chain';
	import GitHubIcon from '~icons/akar-icons/github-fill';
	import AppStoreIcon from '~icons/ion/logo-apple-appstore';

	import TechIcon from '$lib/TechIcon.svelte';
	import type { IconName, ProjectInfo } from 'src/types';

	let names: IconName[] = ['react', 'mst', 'firebase'];
	let project: ProjectInfo;
</script>

<div class="container">
	<img src="footsteps.png" alt="Footsteps" />

	<div class="description-container">
		<h3>Footsteps</h3>

		<span class="project-link">
			UNSW CSESoc Hackathon 2021 Prospa Beginner Prize
			<a href="https://github.com/zijizhu/footsteps">
				<LinkIcon width={25} height={25} />
			</a>
		</span>

		<p>
			Footsteps aims to link a students schooling experience with relevant industry mentors who will
			guide them through their studies and decision on future career choices. (MVP)
		</p>

		<div class="icon-container">
			{#each names as iconName}
				<TechIcon name={iconName} />
			{/each}
		</div>
		<div class="link-container">
			<span>view it on</span>
			<a href="https://github.com/zijizhu">
				<GitHubIcon width={30} height={30} />
			</a>
			<a href="https://github.com/zijizhu">
				<AppStoreIcon width={35} height={35} />
			</a>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 1rem 0 1rem 0;
		border-radius: 0.5rem;
		background-color: var(--bg-color);
	}
	@media (min-width: 768px) {
		.container {
			flex-direction: row;
			border-radius: 0;
			background-color: transparent;
		}
	}

	img {
		max-width: 32rem;
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
	}

	.description-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem;
	}
	@media (min-width: 768px) {
		.description-container {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}

	/* styles for chidren of description-container */
	h3 {
		margin: 1rem 0 1rem 0;
		font-size: 1.75rem;
		line-height: 1;
	}
	.project-link {
		display: inline;
		font-weight: 600;
		font-size: 1.25rem;
		text-decoration: none;
		color: var(--primary-color);
	}
	.project-link a {
		color: var(--primary-color);
	}
	p {
		font-size: 1.25rem;
		margin: 0.75rem 0 0.75rem 0;
	}
	.icon-container {
		display: flex;
		margin: 0.5rem 0 0.5rem 0;
	}
	.link-container {
		display: flex;
		align-items: center;
		margin: 0.5rem 0 0.5rem 0;
	}
	.link-container span {
		margin-right: 1rem;
	}
	.link-container a {
		display: flex;
		align-items: center;
		margin: 0 1rem 0 0;
		color: var(--text-color);
		transition-duration: var(--transition-time);
	}
	.link-container a:hover {
		color: var(--primary-color);
	}
</style>
