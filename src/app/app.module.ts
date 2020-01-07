import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
	faUserTie,
	faFilePdf,
	faToolbox,
	faCode,
	faTree,
	faDesktop,
	faPlane,
	faBaseballBall,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { HomeComponent } from './home/home.component';
import { ProjectService } from './home/project.service';
import { ProjectFilterPipe } from './home/filter.pipe';

@NgModule({
	declarations: [ AppComponent, HomeComponent, ProjectFilterPipe ],
	imports: [ BrowserModule, AppRoutingModule, FontAwesomeModule ],
	providers: [ ProjectService, ProjectFilterPipe ],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor(library: FaIconLibrary) {
		library.addIcons(
			faUserTie,
			faFilePdf,
			faToolbox,
			faLinkedinIn,
			faGithub,
			faCode,
			faTree,
			faDesktop,
			faPlane,
			faBaseballBall,
			faEnvelope
		);
	}
}
