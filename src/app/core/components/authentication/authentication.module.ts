import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';

// Services
import { AuthenticationService } from '../../services';

@NgModule({
	imports: [CommonModule],
	declarations: [
		AuthenticationComponent
	],
	providers: [
		AuthenticationService
	],
	// imports: [RouterModule],
	exports: [AuthenticationComponent]
})
export class AuthenticationModule {
	constructor() {
	}
}
