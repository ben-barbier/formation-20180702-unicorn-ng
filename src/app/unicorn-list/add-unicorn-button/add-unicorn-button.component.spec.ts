import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddUnicornButtonComponent} from './add-unicorn-button.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AddUnicornButtonComponent', () => {
    let component: AddUnicornButtonComponent;
    let fixture: ComponentFixture<AddUnicornButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddUnicornButtonComponent],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddUnicornButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
