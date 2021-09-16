import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient,private route: ActivatedRoute) {}


  ngOnInit(){
    this.pay();
    
  }

  async pay(): Promise<void> {
    let testo=this.route.snapshot.paramMap.get('prezzoTotale');
    let costo:number=0;
    if(testo!=null){
      costo=Math.ceil(parseFloat(testo))
    }
    console.log(costo)
    const payment = {
      name: 'Carrello Spesa',
      currency: 'eur',
      // amount on cents *10 => to be on dollar
      amount: costo*100,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/',
      successUrl: 'http://localhost:4200/',
    };

    const stripe = await this.stripePromise;

    if(stripe!=null){
      this.http
      .post(`${environment.serverUrl}/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
    }

    // this is a normal http calls for a backend api
    
  }
}