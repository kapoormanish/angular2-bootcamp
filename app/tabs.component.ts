import {Component} from "angular2/core";
@Component({
    selector:"tabs",
    template:`
        <ul class="nav nav-pills">
            <li [class.active]="selectedTab=='map'" (click)="selectedTab='map'">
                <a>Map View</a>
            </li>            
            <li [class.active]="selectedTab=='list'" (click)="selectedTab='list'">
                <a>List View</a>
            </li>            
        </ul>
        <div [ngSwitch]="selectedTab">
            <template ngSwithDefault [ngSwitchWhen]="'map'">Map View Content</template>
            <template [ngSwitchWhen]="'list'">List View Content</template>
        </div>
    `
})
export class TabsComponent{
    selectedTab='map';
}



