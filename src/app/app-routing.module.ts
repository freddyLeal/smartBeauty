import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EllaComponent } from './pages/ella/ella.component';
import { EllaServiciosComponent } from './pages/ella-servicios/ella-servicios.component';



const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'ella', component: EllaComponent},
    { path: 'ella-servicios', component: EllaServiciosComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
