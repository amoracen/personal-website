import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProjectService {
	url: string = 'http://localhost:3000/send';
	constructor(private http: HttpClient) {}

	sendMessage(messageContent: any) {
		return this.http.post(this.url, JSON.stringify(messageContent), {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
			responseType: 'text'
		});
	}

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
