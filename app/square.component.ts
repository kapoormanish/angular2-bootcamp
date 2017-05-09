import {Component, EventEmitter, Input, Output} from "angular2/core";

@Component({
    selector:'star',
    template:`
        <style type="text/css">
            .blue{
                background-color: blue;
            }
            .active{
                background-color: red;
            }
            
        </style>
        <br>
        <div (click)="toggleState()" height="100px" width="100px" class="blue" [class.active]="state"  >&nbsp;</div>
        <br>
    `
})
export class SquareComponent{
    @Input()
    state = true;

    @Output()
    change= new EventEmitter();

    toggleState(){
        this.state = !this.state;
        this.change.emit({state: this.state})
    }

}