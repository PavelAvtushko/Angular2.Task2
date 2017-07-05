import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../core/entities';

@Pipe({ name: 'mySearchCourses' })
export class SearchCourses implements PipeTransform {
	public transform(course: CourseItem[], key: string) {
		return course;
		// if (key) {
		// 	key = key.toLowerCase();
		// 	const str = course.name.toLowerCase();
		// 	if (str.search(key) !== -1) {
		// 		return course;
		// 	}
		// } else {
		// 	return course;
		// }
	}
}
