import {Injectable} from "angular2/core";

@Injectable()
export class AuthorService{

    getAuthors(): string[]{
        return ["Author3", "Author4"]
    }

}