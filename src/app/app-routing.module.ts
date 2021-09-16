import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RouteGuardService } from './services/route-guard.service';
import { ListaArticoliComponent } from './lista-articoli/lista-articoli.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { InserimentoArticoliComponent } from './inserimento-articoli/inserimento-articoli.component';
import { RimuoviArticoloComponent } from './rimuovi-articolo/rimuovi-articolo.component';
import { AggiungiPromoComponent } from './aggiungi-promo/aggiungi-promo.component';
import { RimuoviPromoComponent } from './rimuovi-promo/rimuovi-promo.component';
import { CheckoutComponent } from './checkout/checkout.component';





const routes: Routes = [
  {
    path: 'checkout/:prezzoTotale',
    component: CheckoutComponent,
  },
  {path:'', component : LoginComponent},
  {path:'login', component : LoginComponent},
  {path:'listarticoli/:type', component: ListaArticoliComponent},
  {path:'listarticoli/:type/dettaglio/:codart', component: ArticoliComponent},
  {path:'inserimento', component: InserimentoArticoliComponent},
  {path:'rimozione', component: RimuoviArticoloComponent},
  {path:'inserimentoP', component: AggiungiPromoComponent },
  {path:'rimozioneP', component: RimuoviPromoComponent},
  {path:'home/:userid', component : HomeComponent, canActivate:[RouteGuardService],
},
  {path:'**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
