import {Component, EventEmitter, Input, Output} from "angular2/core";

@Component({
    selector:'star',
    templateUrl: "app/star.template.html"
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