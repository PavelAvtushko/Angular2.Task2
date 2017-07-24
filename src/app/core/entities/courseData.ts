export default class CourseData {
	public name: string;
	public description: string;
	public duration: string;

	constructor(name: string, description: string, duration: string) {
		this.name = name;
		this.description = description;
		this.duration = duration;
	}
}
