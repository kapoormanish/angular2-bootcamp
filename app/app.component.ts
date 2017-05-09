import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {SquareComponent} from './square.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello angular</h1>
    <star [state]="true" ></star>
    <input type="text" [value]="title" (input)="onTextBoxChange($event)">
    <input type="text" [(ngModel)]="title">
    <label >{{ title }}</label>
    <button (click)="title=''">Clear</button>
    
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
    directives: [CoursesComponent, AuthorsComponent, SquareComponent]
})
export class AppComponent {

    imageUrl="http://lorempixel.com/400/200";
    altText = "some image";
    isActive=true;
    title = "";

    onClick($event){
        console.log("CLICKED!!!", $event);
        $event.stopPropagation();
    }

    onDivClick(){
        console.log("handled by div.");
    }

    onTextBoxChange($event){
        this.title = $event.target.value;
    }

}