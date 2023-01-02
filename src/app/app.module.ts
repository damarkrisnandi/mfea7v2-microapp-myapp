import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { Page1Component } from './features/page1/page1.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { LazyPageComponent } from './features/lazy-page/lazy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    Page1Component,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    Page1Component,
    MainPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
