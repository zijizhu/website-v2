<script lang="ts">
	import ReactIcon from '~icons/la/react';
	import FirebaseIcon from '~icons/logos/firebase';
	import MaterialIcon from '~icons/logos/material-ui';
	import TypeScriptIcon from '~icons/logos/typescript-icon';
	import MobXIcon from '~icons/logos/mobx';
	import SqlIcon from '~icons/carbon/sql';
	import Unknown from '~icons/akar-icons/question-fill';

	import type { IconName } from 'src/types';

	export let name: IconName | undefined = undefined;
</script>

{#if name === 'react'}
	<ReactIcon width={35} height={35} style="margin-right: 0.5rem; color: #0074a6;" />
{:else if name === 'firebase'}
	<FirebaseIcon width={35} height={35} style="margin-right: 0.5rem;" />
{:else if name === 'material'}
	<MaterialIcon width={35} height={35} style="margin-right: 0.5rem;" />
{:else if name === 'typescript'}
	<TypeScriptIcon width={35} height={35} style="margin-right: 0.5rem;" />
{:else if name === 'mst'}
	<MobXIcon width={35} height={35} style="margin-right: 0.5rem;" />
{:else if name === 'database'}
	<SqlIcon width={35} height={35} style="margin-right: 0.5rem;" />
{:else}
	<Unknown width={35} height={35} style="margin-right: 0.5rem;" />
{/if}
