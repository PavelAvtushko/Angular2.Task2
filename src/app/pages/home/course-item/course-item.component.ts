import { Component, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { CourseItem } from '../../../core/entities';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.component.html',
	styles: [require('./course-item.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})

export class CourseItemComponent {
	@Input() public course: CourseItem;
	@Output() public deleteCourse: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();
	@Output() public editCourse: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

	constructor() {
	}

	public onEditCourse(course: CourseItem): void {
		this.editCourse.emit(course);
	}

	public onDeleteCourse(course: CourseItem): void {
		this.deleteCourse.emit(course);
	}

}
