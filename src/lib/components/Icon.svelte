<script lang="ts">
	import SqlIcon from '~icons/carbon/sql';
	import ReactIcon from '~icons/la/react';
	import MobXIcon from '~icons/logos/mobx';
	import ReduxIcon from '~icons/logos/redux';
	import FirebaseIcon from '~icons/logos/firebase';
	import NextjsIcon from '~icons/logos/nextjs-icon';
	import MaterialIcon from '~icons/logos/material-ui';
	import Unknown from '~icons/akar-icons/question-fill';
	import TypeScriptIcon from '~icons/logos/typescript-icon';

	import type { IconName } from 'src/types';

	export let name: IconName | undefined = undefined;
</script>

{#if name === 'react'}
	<ReactIcon width={35} height={35} style="color: #0074a6;" />
{:else if name === 'firebase'}
	<FirebaseIcon width={35} height={35} />
{:else if name === 'material'}
	<MaterialIcon width={35} height={35} />
{:else if name === 'typescript'}
	<TypeScriptIcon width={35} height={35} />
{:else if name === 'mst'}
	<MobXIcon width={35} height={35} />
{:else if name === 'database'}
	<SqlIcon width={35} height={35} />
{:else if name === 'redux'}
	<ReduxIcon width={35} height={35} />
{:else if name === 'next'}
	<NextjsIcon width={35} height={35} />
{:else}
	<Unknown width={35} height={35} />
{/if}
