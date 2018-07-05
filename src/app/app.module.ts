import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornListComponent} from './unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './unicorn-list/unicorn-card/unicorn-card.component';
import {MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {AddUnicornButtonComponent} from './unicorn-list/add-unicorn-button/add-unicorn-button.component';
import {AwesomePipe} from './shared/pipes/awesome.pipe';
import {HttpClientModule} from '@angular/common/http';
import {EditUnicornComponent} from './unicorn-list/unicorn-card/dialogs/edit-unicorn/edit-unicorn.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from './store/reducers/cart.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        HeaderComponent,
        AddUnicornButtonComponent,
        AwesomePipe,
        EditUnicornComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatBadgeModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({
            cart: cartReducer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),

    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        EditUnicornComponent
    ]
})
export class AppModule {
}
