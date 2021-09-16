import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { InfoMsg } from '../articoli/dto/dto';
import { ArticoliServiceService } from '../services/articoli-service/articoli-service.service';

@Component({
  selector: 'app-rimuovi-promo',
  templateUrl: './rimuovi-promo.component.html',
  styleUrls: ['./rimuovi-promo.component.css']
})
export class RimuoviPromoComponent implements OnInit {

  elemento:string='';
  infoMsg!: InfoMsg;
  viewErr=false;
  rimOk=false;
  

  constructor(private route: ActivatedRoute,private serv: ArticoliServiceService) { }

  ngOnInit(): void {
  }

  elimina(): void {
    this.viewErr=false;
    this.serv.eliminaArticoloP(this.elemento).subscribe(
      response => {

        this.infoMsg = response;
        console.log("Rimozione ok!")
        this.rimOk=true;
      },error => {
           console.log("Errore!")
           this.viewErr=true;
      }
    )

  }

}
