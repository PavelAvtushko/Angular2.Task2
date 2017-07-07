import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChartService {

	constructor(private http: Http) {
	}

	public getChartData(callback) {
		return this.http.get('chartData')
			.subscribe(callback);
	}
}
