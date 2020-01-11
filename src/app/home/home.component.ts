import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { ProjectService } from './project.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit, OnChanges {
	//Variables Contact Form
	contactForm: FormGroup;
	disabledSubmitButton: boolean = true;
	optionsSelect: Array<any>;

	@HostListener('input')
	oninput() {
		if (this.contactForm.valid) {
			this.disabledSubmitButton = false;
		}
	}

	// Class variables
	public isViewableAboutMe: boolean;
	public isViewablePorfolio: boolean;
	public isViewableContact: boolean;

	//Variable for Projects
	projects: any[];
	filterBy?: string = 'all';
	visibleProjects: any[] = [];

	/** Class constructor */
	constructor(private projectService: ProjectService, private fb: FormBuilder) {
		console.log(this.filterBy);
		this.visibleProjects = this.projectService.getProjects();

		this.contactForm = fb.group({
			inputName: [ '', Validators.required ],
			email: [ '', Validators.compose([ Validators.required, Validators.email ]) ],
			message: [ '', Validators.required ]
		});
	}

	/*Contact Form*/
	onSubmit() {
		// console.log('Submit Button Pressed');
		this.projectService.sendMessage(this.contactForm.value).subscribe(
			() => {
				alert('Your message has been sent.');
				this.contactForm.reset();
				this.disabledSubmitButton = true;
			},
			(error) => {
				console.log('Error', error);
			}
		);
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
