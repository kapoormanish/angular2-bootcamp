import {Http} from 'angular2/http';
import {User} from './github-user';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Injectable} from "angular2/core";

@Injectable()
export class GithubService{
    private _userDetailUrl = "https://api.github.com/users/kapoormanish";
    private _followersUrl = "https://api.github.com/users/kapoormanish/followers";

    constructor (private _http: Http){

    }

    fetchFollowers(){
        return this._http.get(this._followersUrl)
            .map(response => response.json());
    }

    fetchUserDetail(){
        return this._http.get(this._userDetailUrl)
            .map(response => response.json());
    }
}
