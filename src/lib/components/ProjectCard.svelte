<script lang="ts">
	import LinkIcon from '~icons/akar-icons/link-chain';
	import GitHubIcon from '~icons/akar-icons/github-fill';
	import AppStoreIcon from '~icons/ion/logo-apple-appstore';

	import type { ProjectInfo } from 'src/types';
	import TechIcon from '$lib/components/TechIcon.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let project: ProjectInfo;
</script>

<div class="container">
	<img src={project.imgSrc} alt={project.imgAlt} />

	<div class="description-container">
		<h3>{project.name}</h3>

		<div class="project-event">
			{project.event}
			{#if project.link}
				<a href={project.link}>
					<LinkIcon width={25} height={25} />
				</a>
			{/if}
		</div>

		<p>
			{project.detail}
		</p>

		<div class="icon-container">
			{#each project.techIconNames as iconName, i}
				<TechIcon {iconName} techName={project.techs[i]} />
			{/each}
		</div>

		{#if project.sourceLink || project.downloadLink}
			<div class="link-container">
				<span>view it on</span>
				{#if project.sourceLink}
					<a href={project.sourceLink}>
						<GitHubIcon width={30} height={30} />
					</a>
				{/if}
				{#if project.downloadLink}
					<a href={project.downloadLink}>
						<AppStoreIcon width={35} height={35} />
					</a>
				{/if}
			</div>
		{/if}
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
			margin-left: 1rem;
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
	.project-event {
		display: inline;
		font-size: 1.25rem;
		color: var(--primary-color);
	}
	.project-event a {
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
