import { Component, OnInit, OnChanges } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit, OnChanges {
	// Class variables
	public isViewableAboutMe: boolean;
	public isViewablePorfolio: boolean;
	public isViewableContact: boolean;

	projects: any[];
	filterBy?: string = 'all';
	visibleProjects: any[] = [];

	/** Class constructor */
	constructor(private projectService: ProjectService) {
		console.log(this.filterBy);
		this.visibleProjects = this.projectService.getProjects();
	}

	ngOnChanges() {
		this.visibleProjects = this.projectService.getProjects();
	}

	/** Life Cycle hook to initialize values */
	ngOnInit() {
		this.isViewableAboutMe = true;
		this.isViewablePorfolio = false;
		this.isViewableContact = false;
	}

	/** Simple method to toggle element visibility */
	public toggleA(): void {
		this.isViewableAboutMe = true;
		this.isViewablePorfolio = false;
		this.isViewableContact = false;
	}
	public toggleP(): void {
		this.isViewableAboutMe = false;
		this.isViewablePorfolio = true;
		this.isViewableContact = false;
	}
	public toggleC(): void {
		this.isViewableAboutMe = false;
		this.isViewablePorfolio = false;
		this.isViewableContact = true;
	}
}
