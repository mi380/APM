import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces' //aa e naam che jena through apde html ma access krsu pipe no
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}