
import {Component} from "angular2/core";
@Component({
    selector: 'subscription-form',
    templateUrl: 'app/subscription-form.template.html'
})
export class SubscriptionFormComponent{
    frequencyOptions = [
        {   value: "DAILY",
            displayValue: "Daily"
        },
        {   value: "WEEKLY",
            displayValue: "Weekly"
        },
        {   value: "MONTHLY",
            displayValue: "Monthly"
        },
    ];

    onSubmit(form){
        console.log("SubmittedForm: ", form);
    }

}