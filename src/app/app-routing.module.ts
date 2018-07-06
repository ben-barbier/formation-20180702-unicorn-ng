import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornComponent} from './pages/unicorn/unicorn.component';
import {AgeGuard} from './pages/unicorn/age.guard';
import {UnicornResolver} from './pages/unicorn/unicorn.resolver';

const routes: Routes = [
    {path: '', component: HomeComponent}, // path: '/'
    {path: 'unicorns', component: UnicornListComponent},
    {
        path: 'unicorns/:id',
        component: UnicornComponent,
        canActivate: [AgeGuard],
        resolve: {
            unicorn: UnicornResolver
        }
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
