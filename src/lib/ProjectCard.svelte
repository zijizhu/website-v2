<script lang="ts">
	import LinkIcon from '~icons/akar-icons/link-chain';
	export let imgPos: 'left' | 'right' = 'left';
</script>

<div class="container" class:container-reverse={imgPos === 'right'}>
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
	</div>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 0 1rem 0;
	}
	@media (min-width: 768px) {
		.container {
			flex-direction: row;
		}
		.container-reverse {
			flex-direction: row-reverse;
		}
	}

	img {
		max-width: 32rem;
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		border: 3px solid var(--selection-color);
	}

	.description-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem;
	}
	h3 {
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
		font-weight: 500;
	}
</style>
