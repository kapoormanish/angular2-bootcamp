import {Injectable} from 'angular2/core';


@Injectable()
export class CourseService{
    getCourses(): string[] {
        return ["Course 1", "Course 2", "Course 3", "Course 4"];
    }
}