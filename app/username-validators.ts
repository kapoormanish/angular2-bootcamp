import {Control} from "angular2/common";

export class UsernameValidators{
    static cannotContainSpace(control: Control){
        let index = control.value.indexOf(' ');
        console.log("index: ", index);
        if(index!=-1){
            return {
                cannotContainSpace: {
                    indexOfSpace: index
                }
            }
        }else{
            return null;
        }
    }
}