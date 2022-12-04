import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ChateComponent } from './componentes/chate/chate.component';
@NgModule({
  declarations: [
    AppComponent,
    ChateComponent,
    
  ],
  imports: [
    BrowserModule,
    ButtonModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
