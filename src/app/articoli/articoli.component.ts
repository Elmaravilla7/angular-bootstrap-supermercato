import { Component, createPlatform, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticoliDTO, BarcodeDTO, FamAssortDTO, IngredientiDTO, IvaDTO } from './dto/dto';
import { ArticoliServiceService } from '../services/articoli-service/articoli-service.service';
import { FormControl, FormGroup } from '@angular/forms'





@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})


export class ArticoliComponent implements OnInit {
  

  public artForm=createForm();
  codart='';
  articolo!: ArticoliDTO;
  iva!: IvaDTO;
  famAssort!: FamAssortDTO;
  barcode:BarcodeDTO[]=[];
  b:string='';
  ingredienti!: IngredientiDTO;
  isVisible=false;
  
  

  constructor(private route:ActivatedRoute,private service: ArticoliServiceService) { }

  ngOnInit(): void {
    this.codart=this.route.snapshot.params['codart'];
    this.service.searchByCod(this.codart).subscribe(
      response => {
        this.articolo=response;
        this.service.searchPriceByCodart(this.articolo.codArt).subscribe(
          response => {
            let p=response;
            //console.log(p);
            this.articolo.prezzo=p;
            //console.log(this.articolo.prezzo);
          },
          error => {
            
          }
        );
        console.log(this.articolo);
        this.iva=this.articolo.iva;
        //console.log(this.iva);
        this.famAssort=this.articolo.famAssort;
        if(this.articolo.barcode.length!==0){
          this.b=this.articolo.barcode[0].barcode;
        }
        
        //console.log(this.famAssort);
        //this.barcode.push(this.articolo.barcode);
        //this.b=this.barcode[0][0].barcode;
        //if(this.b!=null) this.bar=true;
        //console.log(this.barcode[0][0].barcode);
        this.ingredienti=this.articolo.ingredienti;
        //console.log(this.ingredienti);
        this.artForm.controls['codArt'].setValue(this.articolo.codArt);
        this.artForm.controls['descrizione'].setValue(this.articolo.descrizione);
        this.artForm.controls['um'].setValue(this.articolo.um);
        this.artForm.controls['codStat'].setValue(this.articolo.codStat);
        this.artForm.controls['pzCart'].setValue(this.articolo.pzCart);
        this.artForm.controls['pesoNetto'].setValue(this.articolo.pesoNetto);
        this.artForm.controls['idStatoArt'].setValue(this.articolo.idStatoArt);
        this.artForm.controls['dataCreaz'].setValue(this.articolo.dataCreaz);
        //this.artForm.controls['prezzo'].setValue(this.articolo.prezzo);
        //console.log(this.artForm);
        
      },
      error => {
        
      });
      
     this.isVisible=true; 
  }



}
function createForm() {
  let artForm=new FormGroup({
    codArt : new FormControl(''),
    descrizione : new FormControl(''),
    um : new FormControl(''),
    codStat: new FormControl(''),
    pzCart: new FormControl(''),
    pesoNetto: new FormControl(''),
    idStatoArt : new FormControl(''),
    dataCreaz : new FormControl(''),
    prezzo : new FormControl(''),
  })

  
  
  return artForm;
}




