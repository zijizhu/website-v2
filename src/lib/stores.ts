import type { Writable } from 'svelte/store';
import { writable, derived } from 'svelte/store';

import type { ViewName } from 'src/types';

export const windowWidth = writable(0);

export const windowScrollY = writable(0);

type ViewHeights = Record<ViewName, number>;

export const viewHeights = writable<ViewHeights>({
	home: 0,
	projects: 0,
	about: 0
});

export const currentView = derived<[Writable<number>, Writable<ViewHeights>], ViewName>(
	[windowScrollY, viewHeights],
	([$windowScrollY, $viewHeights], set) => {
		const viewOffsets = {
			home: 0,
			projects: $viewHeights.home,
			about: $viewHeights.home + $viewHeights.projects
		};
		// distance from scrollY to each view
		const distances: [string, number][] = Object.entries(viewOffsets).map(([view, offset]) => [
			view,
			Math.abs(offset - $windowScrollY)
		]);
		distances.sort((a, b) => a[1] - b[1]);
		set(distances[0][0] as ViewName);
	}
);
