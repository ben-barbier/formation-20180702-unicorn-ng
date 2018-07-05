import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {AwesomePipe} from '../../shared/pipes/awesome.pipe';
import {MatDialog} from '@angular/material';
import {EditUnicornComponent} from './dialogs/edit-unicorn/edit-unicorn.component';
import * as _ from 'lodash';
import {CartService} from '../../shared/services/cart.service';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
    providers: [AwesomePipe]
})
export class UnicornCardComponent implements OnChanges {


    @Input()
    public unicorn: Unicorn;

    @Output()
    public deleted: EventEmitter<void> = new EventEmitter();

    public isYoung: boolean;

    public isInCart = false;

    constructor(public dialog: MatDialog,
                private cartService: CartService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.isYoung = this.unicorn.birthyear === new Date().getFullYear();
    }

    public delete() {
        this.deleted.emit();
    }

    public changeStatus() {
        if (this.isInCart) {
            this.cartService.removeUnicornFromCart(this.unicorn);
        } else {
            this.cartService.addUnicornToCart(this.unicorn);
        }
        this.isInCart = !this.isInCart;
    }

    public edit() {
        this.dialog.open(EditUnicornComponent, {data: _.cloneDeep(this.unicorn)})
            .afterClosed()
            .subscribe((updatedUnicorn: Unicorn) => {
                if (updatedUnicorn) {
                    this.unicorn = updatedUnicorn;
                }
            });
    }

}
