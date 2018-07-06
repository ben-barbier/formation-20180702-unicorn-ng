import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
    MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {AwesomePipe} from './shared/pipes/awesome.pipe';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from './store/reducers/cart.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HomeComponent} from './pages/home/home.component';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import {AddUnicornButtonComponent} from './pages/unicorn-list/add-unicorn-button/add-unicorn-button.component';
import {EditUnicornComponent} from './pages/unicorn-list/unicorn-card/dialogs/edit-unicorn/edit-unicorn.component';
import {UnicornComponent} from './pages/unicorn/unicorn.component';
import {unicornsReducer} from './store/reducers/unicorns.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UnicornsEffects} from './store/effects/unicorns.effects';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        HeaderComponent,
        AddUnicornButtonComponent,
        AwesomePipe,
        EditUnicornComponent,
        HomeComponent,
        UnicornComponent
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
        MatSnackBarModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({
            unicorns: unicornsReducer,
            cart: cartReducer,
        }),
        [EffectsModule.forRoot([
            UnicornsEffects
        ])],
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
