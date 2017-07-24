import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../services';

@Component({
	selector: 'authentication',
	templateUrl: 'authentication.component.html',
	styles: [require('./authentication.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class AuthenticationComponent {
	public user: string;

	constructor(
		private authenticationService: AuthenticationService) {
	}

	public logOut(e) {
		e.preventDefault();
		this.user = this.authenticationService.logOut();
		this.sendMessage();
	}

	public logIn(e, log, pass) {
		e.preventDefault();
		this.user = this.authenticationService.logIn(log, pass);
		this.sendMessage();
	}

	public getUserInfo(e) {
		e.preventDefault();
		return this.authenticationService.getUserInfo();
	}

	private sendMessage(): void {
		// send message to subscribers via observable subject
		this.authenticationService.sendMessage(this.user);
	}

	private clearMessage(): void {
		// clear message
		this.authenticationService.clearMessage();
	}
}









