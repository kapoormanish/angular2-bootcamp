import {Component} from "angular2/core";
import {TweetService} from "./tweet.service";
import {TweetComponent} from "./tweet.component";
@Component({
    selector:'twitter-timeline',
    template:`
        <ul>
            <li *ngFor="#tweet of tweets">
                <tweet [tweet]="tweet"></tweet>
            </li>
        </ul>
    `,
    providers: [TweetService],
    directives: [TweetComponent]
})
export class TwitterTimelineComponent{
    tweets = [];

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
}