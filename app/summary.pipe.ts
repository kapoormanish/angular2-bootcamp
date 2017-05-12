
import {Pipe, PipeTransform} from "angular2/core";
@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, args: string[]){
        let result = '';
        if(value){
            let maxNumberOfCharacters = args && args[0] ? parseInt(args[0]) : 15;
            let suffix = args && args[1] ? args[1] : '...';
            result = value.substring(0, maxNumberOfCharacters)
            result = result + suffix;
        }
        return result;
    }

}