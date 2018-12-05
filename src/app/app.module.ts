import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './signin/signin.component';
<<<<<<< HEAD
import { SingleMenuComponent } from './single-menu/single-menu.component';
import { DayComponent } from './day/day.component';
=======
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { AdministrationComponent } from './administration/administration.component';
>>>>>>> 46530cda4c8e68f651594b7a06411df9db2b1f28

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BasketComponent,
    ProfilComponent,
    AuthComponent,
    SigninComponent,
<<<<<<< HEAD
    SingleMenuComponent,
    DayComponent
=======
    ResetPwdComponent,
    AdministrationComponent
>>>>>>> 46530cda4c8e68f651594b7a06411df9db2b1f28
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
