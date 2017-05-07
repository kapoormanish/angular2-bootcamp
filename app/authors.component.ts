import {Component} from 'angular2/core';
import {AuthorService} from './author.service'
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
    selector: 'authors',
    template: `
    <h2>{{ title }}</h2>
        <input type="text" autoGrow />
        <ul>
            <li *ngFor='#author of authors'>
                {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorService],
    directives: [AutoGrowDirective]
})
export class AuthorsComponent{
    title = "Authors";
    authors = ["author1", "author2"];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}