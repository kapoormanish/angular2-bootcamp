import {Component} from "angular2/core";
import {ControlGroup, FormBuilder, Validator, Validators} from "angular2/common";
import {PasswordValidators} from "./password-validators";
@Component({
    selector: 'password-reset-form',
    templateUrl: 'app/password-reset-form.template.html'
})
export class PasswordResetComponent{

    passwordResetForm: ControlGroup;

    constructor(formBuilder: FormBuilder){
        this.passwordResetForm = formBuilder.group({
            oldPassword: ['', Validators.required],
            newPassword: ['',Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmPassword: ['',Validators.required]
        }, {
            validator: PasswordValidators.passwordsShouldMatch
        })
    }

}