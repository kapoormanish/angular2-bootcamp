import {Component} from 'angular2/core'
import {CourseService} from './course.service'
@Component({
    selector:  'courses',
    template: `
    <h2>{{ title }}</h2>
    <div *ngIf="courses.length > 0">
        <ul>
            <li *ngFor="#course of courses, #index= index">
                {{ index + 1 }}:  {{ course }}
            </li>
        </ul>
    </div>
    <div *ngIf="courses.length == 0">
        You dont have any courses yet.
    </div>
    `,
    providers: [CourseService]
})
export class CoursesComponent{
    title: string =  "Courses";
    courses=[];

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}