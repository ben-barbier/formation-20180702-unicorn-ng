import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {UnicornListComponent} from './unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './unicorn-list/unicorn-card/unicorn-card.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                UnicornListComponent,
                UnicornCardComponent,
            ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should render title in a h1 tag', async(() => {
        // const fixture = TestBed.createComponent(AppComponent);
        // fixture.detectChanges();
        // const compiled = fixture.debugElement.nativeElement;
        // expect(compiled.querySelector('h1').textContent).toContain('Welcome to unicorn-ng!');
    }));
});
