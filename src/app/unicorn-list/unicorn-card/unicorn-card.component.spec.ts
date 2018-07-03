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
            declarations: [UnicornCardComponent, TestHostComponent],
            // Tells the compiler not to error on unknown elements and attributes
            schemas: [NO_ERRORS_SCHEMA], // OU CA OU IMPORTER
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponent.unicorn = {id: 1} as Unicorn;
        component = queryCssSelector(fixture, 'uni-unicorn-card').componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('shoud have unicorn as Input', () => {
        // When
        const card: UnicornCardComponent = queryCssSelector(fixture, 'uni-unicorn-card').componentInstance;

        // Then
        expect(card.unicorn).toBe(hostComponent.unicorn);
    });

    it('should set isYoung property at true on init', () => {
        // Given
        const unicorn: Unicorn = {id: 1, birthyear: new Date().getFullYear()} as Unicorn;
        hostComponent.unicorn = unicorn;

        // When
        fixture.detectChanges();

        // Then
        expect(component.isYoung).toBeTruthy();
    });

    it('should set isYoung property at false on init', () => {
        // Given
        const unicorn: Unicorn = {id: 1, birthyear: new Date().getFullYear() - 1} as Unicorn;
        hostComponent.unicorn = unicorn;

        // When
        fixture.detectChanges();

        // Then
        expect(component.isYoung).toBeFalsy();
    });

});

@Component({
    template: `
        <uni-unicorn-card [unicorn]="unicorn" (deleted)="deleteFromList($event)"></uni-unicorn-card>`
})
class TestHostComponent {
    unicorn: Unicorn;
    deleteFromList = (unicorn: Unicorn) => {
    };
}

export function queryCssSelector(fixture: ComponentFixture<any>, selector: string): DebugElement {
    if (!fixture) {
        return null;
    }
    return fixture.debugElement.query(By.css(selector));
}
