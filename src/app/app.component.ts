import {Component} from '@angular/core';
import {Unicorn} from './models/unicorn.model';
import {UnicornService} from './shared/services/unicorn.service';
import {from, Observable, of} from 'rxjs';
import {catchError, filter, flatMap, map, pluck, reduce, tap, toArray} from 'rxjs/operators';

@Component({
    selector: 'uni-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public unicorns: Observable<Unicorn[]> = this.unicornService.getAll().pipe(
        flatMap(e => e),
        filter((unicorn: Unicorn) => unicorn.weight > 250),
        toArray()
    );

    constructor(private unicornService: UnicornService) {
    }

    public logIt(event: MouseEvent) {
        console.log('it');
    }
}
