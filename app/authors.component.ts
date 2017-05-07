import {Component} from 'angular2/core';

@Component({
    selector: 'authors',
    template: `
    <h2>{{ title }}</h2>
        <ul>
            <li *ngFor='#author of authors'>
                {{ author }}
            </li>
        </ul>
    `
})
export class AuthorsComponent{
    title = "Authors";
    authors = ["author1", "author2"];
}