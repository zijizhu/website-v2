export type ViewName = 'home' | 'projects' | 'about';

export type IconName = 'database' | 'firebase' | 'material' | 'typescript' | 'mst' | 'react';

export interface ProjectInfo {
	name: string;
	event: string;
	link?: string;
	detail: string;
	sourceLink?: string;
	downloadLink?: string;
	techs: string[];
	techIconNames: IconName[];
	imgSrc: string;
	imgAlt: string;
}
