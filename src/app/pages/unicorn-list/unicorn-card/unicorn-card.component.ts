import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Unicorn} from '../../../models/unicorn.model';
import {AwesomePipe} from '../../../shared/pipes/awesome.pipe';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditUnicornComponent} from './dialogs/edit-unicorn/edit-unicorn.component';
import * as _ from 'lodash';
import {CartService} from '../../../shared/services/cart.service';
import {UnicornService} from '../../../shared/services/unicorn.service';
import {filter, map, mergeMap, tap} from 'rxjs/operators';

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
                private cartService: CartService,
                private unicornService: UnicornService,
                private snackBar: MatSnackBar) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.isYoung = this.unicorn.birthyear === new Date().getFullYear();
    }

    public delete() {
        this.unicornService.delete(this.unicorn).subscribe({
            next: () => {
                this.snackBar.open(`${this.unicorn.name} à été supprimé :-)`);
                this.deleted.emit();
            },
            error: () => {
                this.snackBar.open(`Un problème est survenu lors de la suppression de ${this.unicorn.name} :-(`);
            }
        });
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
            .pipe(
                filter((unicorn: Unicorn) => unicorn != null),
                map((unicorn: Unicorn) => {
                    delete unicorn.capacitiesObj;
                    return unicorn;
                }),
                mergeMap((updatedUnicorn) => this.unicornService.update(updatedUnicorn)),
                tap((updatedUnicorn) => this.unicorn = updatedUnicorn),
            )
            .subscribe();
    }

}
