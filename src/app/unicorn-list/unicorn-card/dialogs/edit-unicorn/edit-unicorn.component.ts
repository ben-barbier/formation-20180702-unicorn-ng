import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Unicorn} from '../../../../models/unicorn.model';

@Component({
    selector: 'uni-edit-unicorn',
    templateUrl: './edit-unicorn.component.html',
    styleUrls: ['./edit-unicorn.component.scss']
})
export class EditUnicornComponent {

    constructor(private dialogRef: MatDialogRef<EditUnicornComponent>,
                @Inject(MAT_DIALOG_DATA) public unicorn: Unicorn) {
    }

    public save() {
        this.dialogRef.close(this.unicorn);
    }

}
