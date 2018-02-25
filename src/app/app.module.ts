import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './item.service';

import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DataTableModule,
    ButtonModule, 
    InputTextModule, 
    InputMaskModule, 
    CalendarModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
