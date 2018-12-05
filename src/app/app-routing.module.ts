import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import { AuthComponent } from './auth/auth.component';
import { ProfilComponent } from './profil/profil.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'accueil', component: MenuComponent},
  { path: 'panier', component: BasketComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'profil', component: ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
