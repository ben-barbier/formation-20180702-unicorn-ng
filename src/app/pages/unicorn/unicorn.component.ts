import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {UnicornService} from '../../shared/services/unicorn.service';
import {Unicorn} from '../../models/unicorn.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'uni-unicorn',
    templateUrl: './unicorn.component.html',
    styleUrls: ['./unicorn.component.css']
})
export class UnicornComponent {

    public unicorn: Unicorn;

    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe((resolvedData: Data) => {
            this.unicorn = resolvedData.unicorn;
        });
    }

}
