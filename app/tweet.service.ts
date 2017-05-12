
import {Injectable} from "angular2/core";

@Injectable()
export class TweetService{
    getTweets(){
        return [
            {   userImageUrl: "http://lorempixel.com/100/100/people?3",
                userTwitterHandle: "windwardstudios",
                userTwitterName: "Windward",
                tweetText: "Looking for a better reporting company or docgen app?",
                likeCount:5,
                isLiked:true

            },
            {   userImageUrl: "http://lorempixel.com/100/100/people?4",
                userTwitterHandle: "kapoormanish",
                userTwitterName: "Manish Kapoor",
                tweetText: "An awesome tweet by an awesome person.",
                likeCount:8,
                isLiked:false

            }

        ];

    }
}