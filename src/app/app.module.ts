import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornListComponent} from './unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './unicorn-list/unicorn-card/unicorn-card.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { AddUnicornButtonComponent } from './unicorn-list/add-unicorn-button/add-unicorn-button.component';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        HeaderComponent,
        AddUnicornButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
