export type ViewName = 'home' | 'projects' | 'about';

export type IconName =
	| 'database'
	| 'firebase'
	| 'material'
	| 'typescript'
	| 'mst'
	| 'react'
	| 'redux'
	| 'next';

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

export interface CourseInfo {
	code: string;
	link: string;
	title: string;
	description: string;
	mark: string;
}
