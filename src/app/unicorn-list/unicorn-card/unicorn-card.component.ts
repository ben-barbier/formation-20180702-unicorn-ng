import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    @Output()
    public deleted: EventEmitter<void> = new EventEmitter();

    public isYoung: boolean;

    constructor() {
    }

    ngOnInit(): void {
        this.isYoung = this.unicorn.birthyear === new Date().getFullYear();
    }

    public delete() {
        this.deleted.emit();
    }

}
