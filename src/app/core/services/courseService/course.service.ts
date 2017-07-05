import { Injectable } from '@angular/core';
// import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
// import { Observable } from 'rxjs';

// import 'rxjs/add/operator/map';

import { CourseItem } from '../../entities';

@Injectable()
export class CourseService {

	constructor() {
	}

	public getCourseItems(): CourseItem[] {
		return [
			new CourseItem({
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
		];
	}

	public deleteCourse(courses: CourseItem[], course: CourseItem): void {
		const index = courses.indexOf(course);
		courses.splice(index, 1);
	}

	public addNewCourse(courses: CourseItem[], data): void {
		const newCourse = new CourseItem(data);
		courses.push(newCourse);
	}

	public updateCourse(courses: CourseItem[], data: CourseItem): void {
		const currentCourse = courses.find((item) => item.id === data.id);
		currentCourse.modifyCourse(data);
	}
}
