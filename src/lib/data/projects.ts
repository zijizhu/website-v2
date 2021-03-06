import type { ProjectInfo } from 'src/types';

const projects: ProjectInfo[] = [
	{
		name: 'Medician',
		event: 'UNSW CSESoc Project Competition 2021 Third Prize',
		link: 'https://www.facebook.com/events/184882760245206/?active_tab=discussion',
		detail:
			'Medician is a cross-platform health tracking app that is intuitive and easy to use. You will be able to record details about your symptoms and set notifications for your medical + fitness routines.',
		sourceLink: 'https://github.com/fxlui/medician',
		downloadLink: 'https://apps.apple.com/au/app/medician/id1584595040',
		techs: ['React Native', 'TypeScript', 'MobX State Tree', 'SQLite'],
		techIconNames: ['react', 'typescript', 'mst', 'database'],
		techLinks: [
			'https://reactnative.dev/',
			'https://www.typescriptlang.org/',
			'https://mobx-state-tree.js.org/intro/welcome',
			'https://www.sqlite.org/index.html'
		],
		imgSrc: 'medician.png',
		imgAlt: 'Medician App'
	},
	{
		name: 'cms.csesoc.unsw.edu.au',
		event: 'UNSW CSESoc Projects Team',
		detail:
			'A responsive, UX-focused web application that will become the hub for all things CSESoc. For the sake of the future, the team has committed to creating a custom Content Management System (CMS) with the end goal of allowing extremely easy editing without touching code. (WIP)',
		sourceLink: 'https://github.com/csesoc/cms.csesoc.unsw.edu.au',
		techs: ['React', 'Redux', 'TypeScript', 'Next.js'],
		techIconNames: ['react', 'redux', 'typescript', 'next'],
		techLinks: [
			'https://reactjs.org/',
			'https://redux-toolkit.js.org/',
			'https://www.typescriptlang.org/',
			'https://nextjs.org/'
		],
		imgSrc: 'CSESoc.png',
		imgAlt: 'CSESoc Website CMS'
	},
	{
		name: 'TaskHouse',
		event: 'CompSci Capstone project',
		detail:
			'TaskHouse is a collaborative platform for teams to communicate the state of their tasks, for users to connect with their collaborators through a user-friendly interface.',
		techs: ['React', 'TypeScript', 'Material UI', 'Firebase'],
		techIconNames: ['react', 'typescript', 'material', 'firebase'],
		techLinks: [
			'https://reactjs.org/',
			'https://www.typescriptlang.org/',
			'https://mui.com/',
			'https://firebase.google.com/'
		],
		imgSrc: 'taskhouse.png',
		imgAlt: 'Taskhouse App'
	},
	{
		name: 'Footsteps',
		event: 'UNSW CSESoc Hackathon 2021 Prospa Beginner Prize',
		link: 'https://youtu.be/-Ruo8NlrkCo?list=PLtdbwEd-4QWExTxke9BRnkbHv2zXX-_qT&t=335',
		detail:
			'Footsteps aims to link a students schooling experience with relevant industry mentors who will guide them through their studies and decision on future career choices. (MVP)',
		sourceLink: 'https://github.com/zijizhu/footsteps',
		techs: ['React Native'],
		techIconNames: ['react'],
		techLinks: ['https://reactnative.dev/'],
		imgSrc: 'footsteps.png',
		imgAlt: 'Footsteps App'
	}
];

export default projects;
