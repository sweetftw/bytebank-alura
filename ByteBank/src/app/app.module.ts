import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NovaTransferenciaComponent } from './components/nova-transferencia/nova-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
