import {Component, Input, OnInit} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {Observable} from 'rxjs';
import {UnicornService} from '../../shared/services/unicorn.service';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns: Unicorn[];

    constructor(private unicornService: UnicornService) {
        this.unicornService.getAll().subscribe(unicorns => {
            this.unicorns = unicorns;
        });
    }

    public deleteUnicorn(unicornToDelete: Unicorn) {
        this.unicorns = this.unicorns.filter((unicorn: Unicorn) => unicorn.id !== unicornToDelete.id);
    }

}
