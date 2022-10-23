import { HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    HttpClientModule
  ],
  providers: [],
  // HAN: 
  // Comentar esta línea para generar el "dist", quitar los comentarios para desarrollo.
  // Generar dist: ng build --output-hashing none --single-bundle true
  // Usar solo el main para integraciones.
  //bootstrap: [AppComponent],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector){}

  ngDoBootstrap(): void {
      const element = createCustomElement(AppComponent, {injector: this.injector});
      customElements.define('input-diagnostics', element);
  }
}
