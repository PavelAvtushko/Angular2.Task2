import { Component, ViewEncapsulation, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { TodoItem } from '../../../core/entities';
// import { todoStatusClasses } from '../../../core/enums';
import { CourseItem } from '../../../core/entities';

@Component({
	selector: 'edit-form',
	templateUrl: 'edit-form.component.html',
	styles: [require('./edit-form.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class EditFormComponent implements OnInit {
	@Output() public showForm: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() public addNewCourse: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();
	@Input() public courseData;
	public newCourse;

	constructor() {
	}

	public ngOnInit() {
		this.newCourse = Object.assign({}, this.courseData);
		this.newCourse.date = this.newCourse.date || new Date();
	}

	public hideForm() {
		this.showForm.emit(false);
	}

	public addCourse() {
		this.addNewCourse.emit(this.newCourse);
	}
}
