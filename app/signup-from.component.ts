import {Component} from "angular2/core";
import {Control, ControlGroup, Validators} from "angular2/common";
@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.template.html'

})
export class SignUpFormComponent{
    signupForm= new ControlGroup({
        username: new Control("", Validators.required),
        password: new Control("",Validators.required)
    })

    signup(){
        console.log("Signup form", this.signupForm.value);
    }
}
