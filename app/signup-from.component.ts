import {Component} from "angular2/core";
import {Control, ControlGroup, FormBuilder, Validators} from "angular2/common";
import {UsernameValidators} from "./username-validators";
@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.template.html'

})
export class SignUpFormComponent{
    signupForm: ControlGroup;

    constructor(formBuilder: FormBuilder){
        this.signupForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required, UsernameValidators.cannotContainSpace])],
            password: ['', Validators.required]
        })
    }

    // signupForm= new ControlGroup({
    //     username: new Control("", Validators.required),
    //     password: new Control("",Validators.required)
    // });

    signup(){
        console.log("Signup form", this.signupForm.value);
    }
}
