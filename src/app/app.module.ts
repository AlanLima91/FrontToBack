import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './signin/signin.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { AdministrationComponent } from './administration/administration.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BasketComponent,
    ProfilComponent,
    AuthComponent,
    SigninComponent,
    ResetPwdComponent,
    AdministrationComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
