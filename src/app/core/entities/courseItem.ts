import CourseData from './courseData';

export class CourseItem {
	public name: string;
	public description: string;
	public date: Date;
	public duration: string;
	public id: string;

	constructor(data: CourseData) {
		this.name = data.name || 'no name';
		this.description = data.description || 'no description';
		this.date = new Date();
		this.id = this.generateID();
		this.duration = data.duration || 'no info';
	}

	public modifyCourse(data: CourseData): void {
		this.name = data.name || 'no name';
		this.description = data.description || 'no description';
		this.duration = data.duration || 'no info';
	}

	private generateID(): string {
		const randomNumber = Math.ceil(Math.random() * 10000);
		const id = Date.now() + randomNumber;
		return id.toString();
	}
}

// class CourseItemManager {
// 	private _itemsList;

// 	constructor() {
// 		this._itemsList = {};
// 	}

// 	public setCourse(course: CourseItem): void {
// 		this._itemsList[course.id] = course;
// 	}

// 	public deleteCourse(course: CourseItem): void {
// 		delete this._itemsList[course.id];
// 	}

// 	public modifySelectedCourse(course: CourseItem, data: CourseData): void {
// 		this._itemsList[course.id].modifyCourse(data);
// 	}

// 	// for deleting
// 	public print(): void {
// 		const a = Object.keys(this._itemsList);
// 		a.map((i) => { console.log(this._itemsList[i].name); });
// 		console.log('_____________');
// 	}
// }

// const inst1: CourseData = {
// 	name: 'pasha1',
// 	description: 'descr1',
// 	duration: 'durat1'
// };

// const inst2: CourseData = {
// 	name: 'pasha2',
// 	description: 'descr2',
// 	duration: 'durat2'
// };

// const inst3: CourseData = {
// 	name: 'pasha4',
// 	description: 'descr2',
// 	duration: 'durat2'
// };

// const obj1 = new CourseItem(inst1);
// const obj2 = new CourseItem(inst2);
// const obj3 = new CourseItem(inst3);
// const list = new CourseItemManager();
// list.setCourse(obj1);
// list.setCourse(obj2);
// list.setCourse(obj3);
// list.print();
// list.modifySelectedCourse(obj1, inst3);
// list.print();
// list.deleteCourse(obj1);
// list.print();
