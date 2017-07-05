// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './home.routes';

// custom components
import { HomeComponent } from './home.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SearchFormComponent } from './search-form/search-form.component';

// pipes
import { SearchCourses } from '../../core/pipes/searchCourses.pipe';

@NgModule({
	declarations: [
		HomeComponent,
		TodoItemComponent,
		CourseItemComponent,
		PieChartComponent,
		EditFormComponent,
		SearchFormComponent,
		SearchCourses
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: []
})
export class HomeModule {
	constructor() {
	}
}
