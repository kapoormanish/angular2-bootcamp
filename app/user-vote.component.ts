
import {Component, EventEmitter, Input, Output} from "angular2/core";
@Component({
    selector:'user-vote',
    template:`
        <style rel="stylesheet">
            .active{
                color: orange;
            }
        </style>
        <div style="width:20px">
            <span (click)="onUpVote($event)">
            <i  class="fa fa-angle-up fa-5x" [class.active]="voteByCurrentUser == 1" aria-hidden="true"></i>
            </span>
            <span>
            <label style="padding-left:10px;font-size:x-large">{{ totalVotes }}</label>
        </span>
            <i (click)="onDownVote($event)" class="fa fa-angle-down fa-5x" [class.active]="voteByCurrentUser ==-1" aria-hidden="true"></i>
        </div>
    `
})
export class UserVoteComponent{
    @Input()
    totalVotes = 0;
    voteByCurrentUser = 0;
    isUpVote = null;

    @Output()
    vote = new EventEmitter();

    onUpVote($event){
        console.log("increased!!");
        if(this.isUpVote != true || this.voteByCurrentUser==0){
            this.totalVotes++;
            this.isUpVote=true;
            this.voteByCurrentUser++;
        }

    }

    onDownVote($event){
        if(this.isUpVote != false || this.voteByCurrentUser==0){
            this.totalVotes--;
            this.isUpVote=false;
            this.voteByCurrentUser--
        }
    }

}