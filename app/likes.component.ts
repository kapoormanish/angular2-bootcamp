import {Component, EventEmitter, Input, Output} from "angular2/core";
@Component({
    selector: "likes",
    template: `
        <style type="text/css">
            .light-grey {
                color: lightgray;,
                cursor: pointer
            }

            .liked {
                color: pink;
            }

        </style>
        <br>
        <i (click)="toggleState()" class="fa fa-heart light-grey" [class.liked]="isLiked">&nbsp;</i>
        <label >{{ likeCount }}</label>
        <br>
    `
})
export class LikesComponent {
    @Input()
    likeCount = 0;
    @Input()
    isLiked = false;

    toggleState() {
        this.isLiked = !this.isLiked;
        if (this.isLiked) {
            this.likeCount++;
        } else {
            this.likeCount--;
        }
    }

}