import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './signin/signin.component';
import { SingleMenuComponent } from './single-menu/single-menu.component';
import { DayComponent } from './day/day.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { AdministrationComponent } from './administration/administration.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    ProfilComponent,
    AuthComponent,
    SigninComponent,
    SingleMenuComponent,
    DayComponent,
    ResetPwdComponent,
    AdministrationComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
