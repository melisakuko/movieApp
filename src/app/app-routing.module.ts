import { NgModule } from '@angular/core';

import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'movies', component: MoviesComponent },
    { path: 'actors', component: ActorsComponent, },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: '**', component: MoviesComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
