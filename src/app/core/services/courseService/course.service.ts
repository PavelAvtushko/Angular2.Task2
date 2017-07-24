import { Injectable } from '@angular/core';
// import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
// import { Observable } from 'rxjs';

// import 'rxjs/add/operator/map';

import { CourseItem } from '../../entities';

const DBdata = {
	name1: [new CourseItem({
		name: 'Video course 1',
		description: 'Heaaalth and social security',
		duration: '1h 23 min'
	}),
	new CourseItem({
		name: 'Video course 2',
		description: 'Tax collection and management',
		duration: '2h 23 min'
	}),
	new CourseItem({
		name: 'Video course 3',
		description: 'Heaaalth and social security',
		duration: '1h 23 min'
	}),
	new CourseItem({
		name: 'Video course 4',
		description: 'Tax collection and management',
		duration: '1h 23 min'
	}),
	new CourseItem({
		name: 'Video course 5',
		description: 'Health and social security',
		duration: '1h 28 min'
	})
	],
	name2: []
};

@Injectable()
export class CourseService {

	constructor() { }

	public getList(userName: string): CourseItem[] {
		if (DBdata[userName]) {
			return DBdata[userName];
		}
		throw new Error('current user is not exist');
	}

	public addUser(userName: string): boolean {
		if (!DBdata[userName]) {
			DBdata[userName] = [];
			return true;
		}
		return false;
	}

	public removeItem(userName: string, courseID: string) {
		if (DBdata[userName]) {
			DBdata[userName] = DBdata[userName]
				.filter(course => course.id !== courseID);
			return DBdata[userName];
		}
	}

	public createCourse(userName: string, courseData) {
		if (DBdata[userName]) {
			const newCourse = new CourseItem(courseData);
			DBdata[userName].push(newCourse);
			return DBdata[userName];
		}
	}

	public getItemByID(userName: string, courseID: string) {
		if (DBdata[userName]) {
			return DBdata[userName].find(course => course.id === courseID);
		}
	}

	public updateItem(userName: string, data: CourseItem) {
		if (DBdata[userName]) {
			const currentCourse = DBdata[userName].find((item) => item.id === data.id);
			currentCourse.modifyCourse(data);
			return DBdata[userName];
		}
	}

	public findItems(userName: string, searchKey: string) {
		searchKey = searchKey.toLowerCase();
		return DBdata[userName].filter(item => item.name.toLowerCase().indexOf(searchKey) !== -1);
	}

}
