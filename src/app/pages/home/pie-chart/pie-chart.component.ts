import { Component, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import * as d3 from 'd3';
import { CourseItem } from '../../../core/entities';

interface CitiesData {
	population: string;
	city: string;
}

class ChartService {

	private color;
	private pie;
	private label;
	private path;
	public svg;
	public height: number;
	public width: number;

	constructor(private data: Array<CitiesData>, containerSelector: string) {

		this.svg = d3.select(containerSelector + ' > svg');
		this.setDimentions(this.svg);

		const radius = Math.min(this.width, this.height) / 2,
			offset = 10,
			colors = this.colorGenerator(this.data.length);

		this.color = d3.scaleOrdinal(colors);

		this.pie = d3.pie().sort(null);

		this.path = d3.arc()
			.outerRadius(radius - offset)
			.innerRadius(0);

		this.label = d3.arc()
			.outerRadius(radius - offset)
			.innerRadius(radius - offset);
	}

	private setDimentions(svg) {
		this.height = +svg.attr('height');
		this.width = +svg.attr('width');
		this.svg.append('g')
			.attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
	}

	private colorGenerator(amount: number) {
		let step = Math.ceil(360 / amount);
		let result = [];
		for (let i = 0; i < amount; i++) {
			result.push(`hsl(${i * step},50%,50%)`);
		};
		return result;
	}

	public init() {
		const arc = this.svg.selectAll('.arc')
			.data(this.pie.value(d => d.population)(this.data))
			.enter().append('g')
			.attr('class', 'arc');

		arc.append('path')
			.attr('d', this.path)
			.attr('fill', d => this.color(d.data.population));

		arc.append('text')
			.attr('transform', d => `translate(${this.label.centroid(d)})`)
			.attr('dy', '0.35em')
			.text(d => d.data.city.split(' ')[1] + d.data.population)
			.attr('fill', 'navyblue');
	}
}



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

	private width = 960;
	private height = 500;
	private amount = 8;
	private radius = Math.min(this.width, this.height) / 2;

	constructor() {

	}

	private colorGenerator(amount: number) {
		let step = Math.ceil(360 / amount);
		let result = [];
		for (let i = 0; i < amount; i++) {
			result.push(`hsl(${i * step},50%,50%)`);
		};
		return d3.scaleOrdinal(result);
	}

	public ngOnInit() {
		// let width = 960,
		// 	height = 500,
		// 	radius = Math.min(width, height) / 2;

		let color = this.colorGenerator(this.amount);

		let pie = d3.pie()
			.sort(null)
			.value(d => d.population);

		let path = d3.arc()
			.outerRadius(this.radius - 10)
			.innerRadius(0);

		let label = d3.arc()
			.outerRadius(this.radius - 40)
			.innerRadius(this.radius - 40);

		let svg = d3.select('.pie-chart').append('svg')
			.attr('width', this.width)
			.attr('height', this.height)
			.append('g')
			.attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');

		d3.json('chartData', function (error, data) {
			if (error) throw error;
			let arc = svg.selectAll('.arc')
				.data(pie(data))
				.enter().append('g')
				.attr('class', 'arc');

			arc.append('path')
				.attr('d', path)
				.attr('fill', d => color(d.data.population));

			arc.append('text')
				.attr('transform', d => `translate(${label.centroid(d)})`)
				.attr('dy', '0.35em')
				.text(d => d.data.city.split(' ')[1] + d.data.population)
				.attr('fill', 'navyblue');
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

