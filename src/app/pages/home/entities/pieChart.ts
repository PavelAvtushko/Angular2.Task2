import * as d3 from 'd3';

export class PieChart {

	private svg;
	private color;
	private pie;
	private label;
	private path;
	private keyParam = 'population';
	private displayParam = 'city';

	constructor(private data, containerSelector: string) {
		this.svg = d3.select(containerSelector + ' > svg');
		this.configuration(this.svg);
	}

	public append(textColor?: string) {
		textColor = textColor || 'black';

		const arc = this.svg.selectAll('.arc')
			.data(this.pie.value((d) => d[this.keyParam])(this.data))
			.enter().append('g')
			.attr('class', 'arc');

		arc.append('path')
			.attr('d', this.path)
			.attr('fill', (d) => this.color(d.data[this.keyParam]));

		arc.append('text')
			.attr('transform', (d) => {
				const midAngle = d.endAngle < Math.PI
					? d.startAngle / 2 + d.endAngle / 2
					: d.startAngle / 2 + d.endAngle / 2 + Math.PI;
				return `translate(${this.label.centroid(d)[0]}, ${this.label.centroid(d)[1]}) rotate(-90) rotate(${midAngle * 180 / Math.PI})`;
			})
			.attr('dy', '.35em')
			.text((d) => d.data[this.displayParam])
			.attr('fill', textColor);
	}

	private configuration(svg) {
		const centralRadius = 0;
		const width = +svg.attr('width');
		const height = +svg.attr('height');
		const radius = Math.min(width, height) / 2;
		const offset = radius / 2;

		this.svg = svg.append('g')
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

		this.color = d3.scaleOrdinal(d3.schemeCategory20);

		this.pie = d3.pie().sort(this.compare);

		this.path = d3.arc()
			.outerRadius(0.95 * radius)
			.innerRadius(centralRadius);

		this.label = d3.arc()
			.outerRadius(radius / 2)
			.innerRadius(radius / 2);
	}

	private compare = (first, second) =>
		second[this.keyParam] - first[this.keyParam];
}
