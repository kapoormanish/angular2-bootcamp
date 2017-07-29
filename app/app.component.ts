import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {SquareComponent} from './square.component'
import {LikesComponent} from "./likes.component";
import {UserVoteComponent} from "./user-vote.component"
import {TwitterTimelineComponent} from "./twitter-timeline.component"
import {TabsComponent} from "./tabs.component"
import {BootstrapPanel} from "./bootstrap-panel.component"
import {ZippyComponent} from "./zippy.component"
import {ContactFormComponent} from "./contact-form-component"
import {SubscriptionFormComponent} from "./subscription-form.component"
import {SignUpFormComponent} from "./signup-from.component"
import {PasswordResetComponent} from "./password-reset-form.component"
import {ControlGroup, FormBuilder} from "angular2/common";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'my-app',                                                                                             
    template: `<h1>Hello world</h1>
    
    <form [ngFormModel]="form">
        <input type="text" ngControl="search">
    </form>
    
    <password-reset-form></password-reset-form>
    <br><br><br>
    <signup-form></signup-form>
    <br><br><br>
    
    <subscription-form></subscription-form>
    <br><br><br>

    <contact-form></contact-form>
    <br><br><br>
    <zippy [title]="zippyContent.title">
        {{ zippyContent.content }}
    </zippy>
    <zippy [title]="zippyContent2.title">
        {{ zippyContent2.content }}
    </zippy>
    <br><br><br>
    <bs-panel>
        <div class="heading">Header</div>
        <div class="body">Panel Body</div>
    </bs-panel>
    
    <tabs></tabs>
    <twitter-timeline></twitter-timeline>
    <user-vote></user-vote>
    <likes [isLiked]="false" [likeCount]="4"></likes>
    
    <star [state]="true" (change)="onStarChange($event)" ></star>
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
    directives: [CoursesComponent, AuthorsComponent, SquareComponent, LikesComponent, UserVoteComponent,
    TwitterTimelineComponent, TabsComponent, BootstrapPanel, ZippyComponent, ContactFormComponent,
        SubscriptionFormComponent, SignUpFormComponent, PasswordResetComponent]
})
export class AppComponent {

    imageUrl="http://lorempixel.com/400/200";
    altText = "some image";
    isActive=true;
    title = "";
    zippyContent={title: 'some title',
        content: 'some content'
    };
    zippyContent2={title: 'some title2',
        content: 'some content2'
    };

    form: ControlGroup;

    constructor(formBuilder: FormBuilder){
        this.form=formBuilder.group({
            search: []
        });


        var search=this.form.find('search');
        search.valueChanges
            .subscribe(x => console.log(x))


        var startDates = [];
        var startDate = new Date();
        for(var day = -2; day<=2; day++){
            var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+day);
            startDates.push(startDate);
        }

        Observable.fromArray(startDates)
            .map(date => console.log("Getting deals for date: "+ date))
            .subscribe(x => console.log(x))

    }

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

    onStarChange($event){
        console.log($event);
    }

}