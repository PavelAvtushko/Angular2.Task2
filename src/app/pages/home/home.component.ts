import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { CourseService } from '../../core/services';
import { ChartService } from '../../core/services';
import { CourseItem } from '../../core/entities';

import { TodoService } from '../../core/services';
import { TodoItem } from '../../core/entities';

@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html')
})

export class HomeComponent implements OnInit, OnDestroy {
	public courseData: CourseItem;
	private todoServiceSubscription: Subscription;
	private todoList: TodoItem[];
	private isLoading: boolean = false;
	private courseList: CourseItem[];
	private isShowingForm: boolean = false;
	private searchValue: string;
	private chartData: any;
	private chartName: string;

	constructor(
		private courseService: CourseService,
		private chartService: ChartService,
		private todoService: TodoService) {
	}

	public ngOnInit() {
		this.chartName = 'The biggest cities in the world';
		this.chartService.getChartData((res) => {
			this.chartData = res.json();
		});

		this.isLoading = false;
		this.todoServiceSubscription = this.todoService.getTodoItems().subscribe((res: TodoItem[]) => {
			this.todoList = res;
			this.isLoading = false;
		});
		this.courseList = this.courseService.getCourseItems();
	}

	public ngOnDestroy() {
		this.todoServiceSubscription.unsubscribe();
	}

	public deleteCourse = (course: CourseItem): void => {
		this.courseService.deleteCourse(this.courseList, course);
		this.showForm(false);
	}

	public editCourse = (course: CourseItem): void => {
		this.courseData = course;
		this.showForm(true);
	}

	public addNewCourse = (data): void => {
		if (data.id) {
			this.courseService.updateCourse(this.courseList, data);
		} else {
			this.courseService.addNewCourse(this.courseList, data);
		}
		this.showForm(false);
	}

	public filterCourses = (course: CourseItem) => {
		if (!this.searchValue) {
			return true;
		} else {
			const subStr = this.searchValue.toLowerCase();
			if (course.name.toLowerCase().indexOf(subStr) !== -1) {
				return true;
			}
			return false;
		}
	}

	public findCourses(request: string) {
		this.searchValue = request;
	}

	private showForm = (flag: boolean): void => {
		if (!flag) {
			this.courseData = null;
		}
		this.isShowingForm = flag;
	}
}
