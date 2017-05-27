
import {ControlGroup} from "angular2/common";
export class PasswordValidators{
    static passwordsShouldMatch(controlGroup: ControlGroup){
        console.log("In passwordsShouldMatch")
        let newPassword = controlGroup.find("newPassword").value;
        console.log("new Password: ", newPassword);
        let confirmPassword = controlGroup.find("confirmPassword").value;
        console.log("confirm Password: ", confirmPassword);
        if(newPassword === confirmPassword){
            return null;
        }else{
            return {
                passwordsShouldMatch:{
                    doPasswordsMatch: false
                }
            };
        }

    }

}