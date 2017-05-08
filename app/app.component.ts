import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello angular</h1>
    <img [src]="imageUrl" bind-alt="altText">
    <courses></courses>
    <authors></authors>
    <div (click)="onDivClick()">
        <button (click)="onClick($event)">Submit</button>
    </div>>
    <button [class.active]="isActive"
    [style.backgroundColor]="isActive? 'blue':'grey'"
    >Submit</button>
        
    `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {

    imageUrl="http://lorempixel.com/400/200";
    altText = "some image";
    isActive=true;

    onClick($event){
        console.log("CLICKED!!!", $event);
        $event.stopPropagation();
    }

    onDivClick(){
        console.log("handled by div.");
    }

}