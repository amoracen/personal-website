import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
	visibleProject = [];

	getProjects() {
		return (this.visibleProject = PROJECTS.slice(0));
	}

	getProject(id: number) {
		return PROJECTS.slice(0).find((project) => project.id == id);
	}
}

const PROJECTS = [
	{ id: 1, category: 'Website', caption: 'Project 1', url: 'assets/img/test 1.jpg', http: 'https://www.google.com/' },
	{ id: 2, category: 'Website', caption: 'Project 2', url: 'assets/img/test 2.jpg', http: 'https://www.google.com/' },
	{ id: 3, category: 'App', caption: 'Project 3', url: 'assets/img/test 3.jpg', http: 'https://www.youtube.com/' },
	{ id: 4, category: 'Java', caption: 'Project 4', url: 'assets/img/test 4.jpg', http: 'https://www.youtube.com/' }
];
