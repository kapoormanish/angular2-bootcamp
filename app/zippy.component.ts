import {Component, Input} from "angular2/core";
@Component({
    selector: 'zippy',
    template:`
        <div class="panel panel-default">
            <div class="panel-heading">
               {{ title }} 
                <span (click)="toggleZippy($event)" class="pull-right">
                    <i class="fa"
                       [ngClass]="{'fa-angle-down': isOpen, 'fa-angle-right': !isOpen}"> </i>    
                </span>
            </div>
            <div class="panel-body panel-collapse collapse" [ngClass]="{'in':isOpen, 'out':!isOpen}">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class ZippyComponent{
 @Input() title = '';
    isOpen = true;

    toggleZippy($event){
        this.isOpen = !this.isOpen;
    }
}