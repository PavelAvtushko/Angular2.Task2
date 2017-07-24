import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

const users = [
	{
		name: 'name 1',
		pass: '123'
	},
	{
		name: 'name 2',
		pass: '321'
	}
];

@Injectable()
export class AuthenticationService {

	private userlogin: string;
	private subject = new Subject<string>();

	constructor() {
	}

	public logOut() {
		this.userlogin = null;
		return this.userlogin;
	}

	public logIn(log, pass) {
		if (!log || !pass) { return; }

		const user = users.find((el) => el.name === log);

		if (user) {
			this.userlogin = (user.pass === pass) ? log : null;
		} else {
			users.push({ name: log, pass });
			this.userlogin = log;
		}
		return this.userlogin;
	}

	public getUserInfo() {
		return this.userlogin;
	}

	public isAuthenticated() {
		return !!this.userlogin;
	}

	public sendMessage(message: string) {
		this.subject.next(message);
	}

	public clearMessage() {
		this.subject.next();
	}

	public getMessage(): Observable<any> {
		return this.subject.asObservable();
	}
}

