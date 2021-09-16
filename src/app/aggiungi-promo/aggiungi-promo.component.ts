import { Component, OnInit } from '@angular/core';
import { ArticoliServiceService } from '../services/articoli-service/articoli-service.service';
import { DettListinoDTO } from '../articoli/dto/dto';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { InfoMsg } from '../articoli/dto/dto';

@Component({
  selector: 'app-aggiungi-promo',
  templateUrl: './aggiungi-promo.component.html',
  styleUrls: ['./aggiungi-promo.component.css']
})
export class AggiungiPromoComponent implements OnInit {

  public artForm=this.createForm();
  codArt: string="";
  prezzo: number=0;
  sconto: number=0;
  prezzoFinale: number=0;
  infoMsg!: InfoMsg;
  viewErr=false;
  insOk=false;


  constructor(private route: ActivatedRoute,private serv: ArticoliServiceService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    let artForm=new FormGroup({
      codArt : new FormControl(''),
      prezzo : new FormControl(''),
      sconto : new FormControl(''),
      //prezzoFinale : new FormControl(''),
    })
  }

  aggiungi(): void{
    this.viewErr=false;
    this.prezzoFinale=this.prezzo-this.sconto;
    let promo:DettListinoDTO= new DettListinoDTO(this.codArt,this.prezzo,this.sconto,this.prezzoFinale);

    console.log(promo);
    this.serv.inserisciArticoloP(promo).subscribe(
      response => {
        
        this.infoMsg = response;
        console.log(" ok!")
        this.codArt="";
        this.prezzo=0;
        this.sconto=0;
        this.prezzoFinale=0;
        this.insOk=true;
      },error => {
        this.infoMsg = error;
        console.log(error)
        this.viewErr=true;
        this.codArt="";
        this.prezzo=0;
        this.sconto=0;
        this.prezzoFinale=0;
      }
    )
  }

}
