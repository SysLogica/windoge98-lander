import { writable } from 'svelte/store';

function updatePageTitle() {
	const defaultTitle = 'Windoge98 - The top memecoin experience on ICP';
	const { subscribe, set } = writable(defaultTitle);

	return {
		subscribe,
		set: (value: string) => {
			set(`${value} - Windoge98`);
		},
		clear: () => {
			set(defaultTitle);
		}
	};
}

export const title = updatePageTitle();
