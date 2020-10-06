import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EllaComponent } from './pages/ella/ella.component';
import { EllaServiciosComponent } from './pages/ella-servicios/ella-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EllaComponent,
    EllaServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
