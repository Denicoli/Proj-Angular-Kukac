import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioService } from './services/usuario.service';
import { MostraDadosComponent } from './mostra-dados/mostra-dados.component';
import { NgxMaskModule, IConfig } from "ngx-mask";

let options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioFormComponent,
    MostraDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }