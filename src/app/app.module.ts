import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './common/error404/error404.component';
import { PrimengModule } from './common/primeng/primeng.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InicioComponent } from './inicio/inicio.component';
import { LogupComponent } from './common/logup/logup.component';
import { DialogService } from 'primeng/dynamicdialog';
import { VecinosModule } from './vecinos/vecinos.module';
import { GruposModule } from './grupos/grupos.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    InicioComponent,
    LogupComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    VecinosModule,
    GruposModule
  ],
  bootstrap: [AppComponent],
  providers: [
    MessageService,
    DialogService
  ]
})
export class AppModule { }
