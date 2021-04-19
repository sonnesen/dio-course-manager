import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {
    
    transform(value: string, fromValue: string, toValue: string) {
        return value.replace(fromValue, toValue);
    }
    
}