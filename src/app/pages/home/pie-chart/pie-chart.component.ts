import { Component, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { PieChart } from '../entities/pieChart';

@Component({
	selector: 'pie-chart',
	templateUrl: 'pie-chart.component.html',
	styles: [require('./pie-chart.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})

export class PieChartComponent implements OnChanges {
	@Input() public chartName;
	@Input() private chartData;
	private chart: PieChart;

	constructor() {
	}

	public ngOnChanges() {
		if (this.chartData) {
			this.chart = new PieChart(this.chartData, '#pie-chart');
			this.chart.append();
		}
	};
};
