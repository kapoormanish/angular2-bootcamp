import {Component} from "angular2/core";

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.template.html'
})
export class ContactFormComponent{

    log(message){
        console.log("Message: ", message);
    }

    onSubmit(form){
        console.log("Submitted Form: ", form);
    }
}