import {Component, Input} from "angular2/core";
import {LikesComponent} from "./likes.component"


@Component({
    selector: 'tweet',
    template: `
        <style>
            .twitter-handle{
                color:darkgrey;
            }
            .padding-bottom{
                padding-bottom: 20px;
            }
            .light-grey{
                color: lightgray;
            }
        </style>
        <div class="media padding-bottom col-md-offset-2">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" [src]="tweet.userImageUrl">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    <strong>{{ tweet.userTwitterName }} </strong>   
                    <label class="twitter-handle" >@{{ tweet.userTwitterHandle }}</label>
                </h4>
                {{ tweet.tweetText }}
                <likes [isLiked]="tweet.isLiked" [likeCount]="tweet.likeCount"></likes>
            </div>
        </div>
        
    `,
    directives:[LikesComponent]

})
export class TweetComponent{
    @Input() tweet = {};



}