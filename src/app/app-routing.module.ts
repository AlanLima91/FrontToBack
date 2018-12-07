import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import { AuthComponent } from './auth/auth.component';
import { ProfilComponent } from './profil/profil.component';
import { SigninComponent } from './signin/signin.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { AdministrationComponent } from './administration/administration.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'panier', component: BasketComponent},
  { path: 'inscription', component: AuthComponent},
  { path: 'connexion', component: SigninComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'resetPassword', component: ResetPwdComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'administration/listeUtilisateur', component: ListUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
