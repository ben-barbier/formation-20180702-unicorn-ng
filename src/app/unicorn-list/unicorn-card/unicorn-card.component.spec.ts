import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnicornCardComponent} from './unicorn-card.component';
import {Component, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {By} from '@angular/platform-browser';

describe('UnicornCardComponent', () => {
    let hostComponent: TestHostComponent;
    let component: UnicornCardComponent;
    let fixture: ComponentFixture<TestHostComponent>; // Toutes les metadata associées au composant (template, instance, ...)

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UnicornCardComponent],
            // Tells the compiler not to error on unknown elements and attributes
            schemas: [NO_ERRORS_SCHEMA], // OU CA OU IMPORTER
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponent.unicorn = {id: 1} as Unicorn;
        component = queryCssSelector(fixture, 'app-unicorn-card').componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        debugger;
        expect(component).toBeTruthy();
    });

    it('shoud have unicorn as Input', () => {
        // When
        const card: UnicornCardComponent = queryCssSelector(fixture, 'app-unicorn-card').componentInstance;

        // Then
        expect(card.unicorn).toBe(hostComponent.unicorn);
    });
});

@Component({
    template: `
        <app-unicorn-card [unicorn]="unicorn" (deleted)="deleteFromList($event)"></app-unicorn-card>`
})
class TestHostComponent {
    unicorn: Unicorn;
    deleteFromList = (unicorn: Unicorn) => {
    };
}

export function queryCssSelector(fixture: ComponentFixture<any>, selector: string): DebugElement {
    debugger;
    if (!fixture) {
        return null;
    }
    return fixture.debugElement.query(By.css(selector));
}
