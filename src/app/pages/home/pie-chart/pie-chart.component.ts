import { Component, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import * as d3 from 'd3';
import { CourseItem } from '../../../core/entities';

@Component({
	selector: 'pie-chart',
	templateUrl: 'pie-chart.component.html',
	styles: [require('./pie-chart.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})

export class PieChartComponent {
	// @Input() public course: CourseItem;
	// @Input() public filterCourses;
	// @Input() public deleteCourse;
	// @Input() public showForm;
	// @Output() public deleteCourse: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();
	// @Output() public editCourse: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

	constructor() {

	}

	public ngOnInit(){
		var width = 960,
				height = 500,
				radius = Math.min(width, height) / 2;

			var color = d3.scaleOrdinal(["red", "blue", "grey", "yellow", "pink", "green", "violet", "lightgrey"]);

			var pie = d3.pie()
			.sort(null)
			.value(function(d) { return d.population; });

			var path = d3.arc()
				.outerRadius(radius - 10)
				.innerRadius(0);

			var label = d3.arc()
				.outerRadius(radius - 40)
				.innerRadius(radius - 40);

			console.log(d3.select(".pie-chart"));

			var svg = d3.select(".pie-chart").append("svg")
				.attr("width", width)
				.attr("height", height)
				.append("g")
				.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

			d3.json("chartData", function(error, data) {
				if (error) throw error;
				console.log(data);
				var arc = svg.selectAll(".arc")
					.data(pie(data))
					.enter().append("g")
					.attr("class", "arc");

				arc.append("path")
					.attr("d", path)
					.attr("fill", function(d) { return color(d.data.population); });

				arc.append("text")
					.attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
					.attr("dy", "0.35em")
					.text(function(d) { return d.data.city.split(' ')[1] + d.data.population; })
					.attr("fill","navyblue");
				});
	}
	// public onEditCourse(course: CourseItem): void {
	// 	this.editCourse.emit(course);
	// 	// this.showForm(course);
	// 	// console.log('edit', course.id);
	// }

	// public onDeleteCourse(course: CourseItem): void {
	// 	this.deleteCourse.emit(course);
	// }

	// public display(course: CourseItem): boolean {
	// 	return this.filterCourses(course);
	// }
}
	
