import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { InfoMsg } from '../articoli/dto/dto';
import { ArticoliServiceService } from '../services/articoli-service/articoli-service.service';


@Component({
  selector: 'app-rimuovi-articolo',
  templateUrl: './rimuovi-articolo.component.html',
  styleUrls: ['./rimuovi-articolo.component.css']
})
export class RimuoviArticoloComponent implements OnInit {

  elemento:string='';
  infoMsg!: InfoMsg;
  viewErr=false;
  rimOk=false;

  constructor(private route: ActivatedRoute,private serv: ArticoliServiceService) { }

  ngOnInit(): void {
  }

  elimina(): void {
    this.viewErr=false;
    this.serv.eliminaArticolo(this.elemento).subscribe(
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
