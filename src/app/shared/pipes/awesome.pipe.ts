import {Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Pipe({
    name: 'awesome'
})
export class AwesomePipe implements PipeTransform {

    constructor() {
    }

    transform(value: string): string {

        console.log('detection !');

        return Array.from(value).reduce((acc, char) => {
            let response = acc;
            if (acc[acc.length - 1] && (acc[acc.length - 1] === acc[acc.length - 1].toUpperCase())) {
                response += char.toLowerCase();
            } else {
                response += char.toUpperCase();
            }
            return response;
        }, '');
    }

}
