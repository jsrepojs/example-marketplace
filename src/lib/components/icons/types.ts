import type { HTMLAttributes } from 'svelte/elements';

export interface Props extends HTMLAttributes<SVGElement> {
	class?: string;
	width?: number;
	height?: number;
}
