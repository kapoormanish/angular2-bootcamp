import {Component, EventEmitter, Input, Output} from "angular2/core";
@Component({
    selector: "likes",
    template: `
        <style type="text/css">
            .grey {
                background-color: grey;,
                cursor: pointer
            }

            .liked {
                background-color: pink;
            }

        </style>
        <br>
        <div (click)="toggleState()" height="100px" width="100px" class="grey" [class.liked]="isLiked">&nbsp;</div>
        <br>
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