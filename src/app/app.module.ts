import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorService } from './services/http/auth-interceptor.service';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ListaArticoliComponent } from './lista-articoli/lista-articoli.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { InserimentoArticoliComponent } from './inserimento-articoli/inserimento-articoli.component';
import { RimuoviArticoloComponent } from './rimuovi-articolo/rimuovi-articolo.component';
import { AggiungiPromoComponent } from './aggiungi-promo/aggiungi-promo.component';
import { RimuoviPromoComponent } from './rimuovi-promo/rimuovi-promo.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    ListaArticoliComponent,
    ArticoliComponent,
    InserimentoArticoliComponent,
    RimuoviArticoloComponent,
    AggiungiPromoComponent,
    RimuoviPromoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
