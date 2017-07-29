///<reference path="../../node_modules/angular2/src/core/linker/interfaces.d.ts"/>
import {Component, OnInit} from "angular2/core";
import {GithubService} from "./github.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {User} from "./github-user";

@Component({
    selector:'git-hub-user-details',
    template:`
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <h4>User</h4>
                <img src="{{ user.avatar_url }}" alt="{{ user.login }}-image">
                <div class="row">
                    {{ user.login }}
                </div>
            </div>
            <div class="col-md-4"></div>
            
        </div>
        
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <h4>Followers</h4>
                <div *ngFor="#follower of followers" class="col-md-12">
                    <img height="150px" src="{{ follower.avatar_url }}" alt="{{ follower.login }}-image">
                    <div class="row">
                        {{ follower.login }}
                    </div>
                </div>
            </div>

            <div class="col-md-4">
            </div>    
        </div>
    `,
    providers: [GithubService, HTTP_PROVIDERS]
})
export class UserDetailsComponent implements OnInit {

    user :User = new User();
    followers = [];

    constructor(private _gitHubService: GithubService){
        _gitHubService.fetchFollowers().subscribe(followers => this.followers = followers);
        _gitHubService.fetchUserDetail().subscribe(userDetail => this.user = userDetail);
    }
}