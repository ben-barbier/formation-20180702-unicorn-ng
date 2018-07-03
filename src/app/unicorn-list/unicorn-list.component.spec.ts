import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnicornListComponent} from './unicorn-list.component';
import {UnicornCardComponent} from './unicorn-card/unicorn-card.component';
import {AddUnicornButtonComponent} from './add-unicorn-button/add-unicorn-button.component';
import {Component, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {Unicorn} from '../models/unicorn.model';
import {By} from '@angular/platform-browser';

describe('UnicornListComponent', () => {
    let hostComponent: TestHostComponent;
    let component: UnicornListComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UnicornListComponent, TestHostComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponent.unicorns = [{id: 1}, {id: 2}] as Unicorn[];
        component = queryCssSelector(fixture, 'uni-unicorn-list').componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('shoud have unicorns as Input', () => {
        // When
        const list: UnicornListComponent = queryCssSelector(fixture, 'uni-unicorn-list').componentInstance;

        // Then
        expect(list.unicorns).toBe(hostComponent.unicorns);
    });

    it('should delete unicorn from list', () => {
        // Given
        // component with 2 unicorns with id 1 and 2

        // When
        component.deleteUnicorn({id: 1} as Unicorn);

        // Then
        expect(component.unicorns.length).toBe(1);
        expect(component.unicorns).toContain({id: 2} as Unicorn);
        expect(component.unicorns).not.toContain({id: 1} as Unicorn);
    });

});

@Component({
    template: '<uni-unicorn-list [unicorns]="unicorns"></uni-unicorn-list>'
})
class TestHostComponent {
    unicorns: Unicorn[];
}

export function queryCssSelector(fixture: ComponentFixture<any>, selector: string): DebugElement {
    if (!fixture) {
        return null;
    }
    return fixture.debugElement.query(By.css(selector));
}
