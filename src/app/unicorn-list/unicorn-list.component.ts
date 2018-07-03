import {Component, Input, OnInit} from '@angular/core';
import {Unicorn} from '../models/unicorn.model';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent implements OnInit {

    @Input()
    public unicorns: Unicorn[];

    constructor() {
        // ... this.unicorns = null
    }

    ngOnInit(): void {
        // ... je peux utilise this.unicorns
    }

    public deleteUnicorn(unicornToDelete: Unicorn) {
        this.unicorns = this.unicorns.filter((unicorn: Unicorn) => unicorn.id !== unicornToDelete.id);
    }
}
