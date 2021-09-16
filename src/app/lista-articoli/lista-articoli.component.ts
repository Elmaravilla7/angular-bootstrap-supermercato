import { Component, OnInit,Input,Output, EventEmitter, NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ArticoliDTO, Cart, DettListinoDTO } from '../articoli/dto/dto';
import { ArticoliServiceService } from '../services/articoli-service/articoli-service.service';


@Component({
  selector: 'app-lista-articoli',
  templateUrl: './lista-articoli.component.html',
  styleUrls: ['./lista-articoli.component.css']
})


export class ListaArticoliComponent implements OnInit {

  typeSearch: any;
  nomeRicerca!: string;
  elemento:string='';
  articoli:ArticoliDTO[]=[];
  viewErr=false;
  loading:boolean=false;
  isVisible:boolean=false;
  carrello: Cart[] = [];
  prezzoTotale:number=0.0;
  dett=false;
  pay=false;


  


  NumArt = 0;
  pagina = 1;
  righe = 10;



  constructor(private route: ActivatedRoute, private service: ArticoliServiceService) { }

  ngOnInit(): void {
    this.typeSearch = this.route.snapshot.paramMap.get('type');
    if(this.typeSearch=='1'){
      this.nomeRicerca='Ricerca per codice articolo'
      this.dett=true;
    }
    if(this.typeSearch=='2'){
      this.nomeRicerca='Ricerca per codice a barre'
      this.dett=true;
    }
    if(this.typeSearch=='3'){
      this.nomeRicerca='Ricerca per descrizione'
      this.dett=true;
    }
    if(this.typeSearch=='4'){
      this.nomeRicerca='Ricerca prodotti da acquistare'
      this.pay=true;
    }
    
  }
  
  ricerca(): void{
    this.viewErr=false;
    this.isVisible=false;
    this.articoli=[];
    console.log(this.elemento);
    if(this.typeSearch=='1'){
      this.service.searchByCod(this.elemento).subscribe(
        response => {
          let articolo:ArticoliDTO=response;
          //console.log(articolo);
          this.service.searchPriceByCodart(articolo.codArt).subscribe(
            response => {
              let p=response;
              //console.log(p);
              articolo.prezzo=p;
              //console.log(articolo.prezzo);
            },
            error => {
              this.isVisible=false;
              //this.viewErr=true;
            }
          );
          this.articoli.push(articolo);
          this.NumArt = this.articoli.length
          //console.log(this.articoli.length);
          this.isVisible=true;
        },
        error => {
          this.isVisible=false;
          this.viewErr=true;
        });
    }
    if(this.typeSearch=='2'){
      this.service.searchByBarcode(this.elemento).subscribe(
        response => {
          let articolo:ArticoliDTO=response;
          //console.log(articolo);
          this.service.searchPriceByCodart(articolo.codArt).subscribe(
            response => {
              let p=response;
              //console.log(p);
              articolo.prezzo=p;
              //console.log(articolo.prezzo);
            },
            error => {
              this.isVisible=false;
              //this.viewErr=true;
            }
          );
          this.articoli.push(articolo);
          this.NumArt = this.articoli.length
          console.log(this.articoli.length);
          this.isVisible=true;
        },
        error => {
          this.isVisible=false;
          this.viewErr=true;
        });
    }
    if(this.typeSearch=='3' || this.typeSearch=='4'){
      this.service.searchByDesc(this.elemento).subscribe(
        response => {
          let arts:ArticoliDTO[]=[];
          arts=response;
          //console.log(arts);
          for(var i in arts){
            let articolo=arts[i]
            this.service.searchPriceByCodart(articolo.codArt).subscribe(
              response => {
                let p=response;
                //console.log(p);
                articolo.prezzo=p;
                console.log(articolo.prezzo);
              },
              error => {
                this.isVisible=false;
                //this.viewErr=true;
              }
            );
            this.articoli.push(articolo);
            this.NumArt = this.articoli.length
            console.log(this.articoli.length);
            this.isVisible=true;
            

          }
          //this.NumArt = this.articoli.length
          //console.log(this.articoli.length);
          this.isVisible=true;
          if(this.articoli.length==0){
            this.viewErr=true;
          }
        },
        error => {
          this.isVisible=false;
          this.viewErr=true;
        });
    }
  }

  addCart(art: ArticoliDTO){
    const productExistInCart = this.carrello.find(({tipo}) => tipo === art.descrizione);
    if (!productExistInCart) {
      this.carrello.push({tipo: art.descrizione,qt:1,prezzo: art.prezzo});
      console.log(this.carrello);
      this.prezzoTotale= Number(Number(this.prezzoTotale + art.prezzo).toFixed(2));
      console.log(this.prezzoTotale);
      for(let i=0;i<this.articoli.length;i++){
        if(this.articoli[i].codArt==art.codArt){
          this.articoli[i].pzCart-=1;
        }
      }
      return;
    }
    productExistInCart.qt += 1;
    console.log(this.carrello);
    this.prezzoTotale= Number(Number(this.prezzoTotale + art.prezzo).toFixed(2));
    console.log(this.prezzoTotale);
    for(let i=0;i<this.articoli.length;i++){
      if(this.articoli[i].codArt==art.codArt){
        this.articoli[i].pzCart-=1;
      }
    }
  }

  removeP(art: ArticoliDTO) {
    const productExistInCart = this.carrello.find(({tipo}) => tipo === art.descrizione);
    if (!productExistInCart) {
      return;
    }
    if(productExistInCart.qt>=1){
      productExistInCart.qt -= 1;
      this.prezzoTotale= Number(Number(this.prezzoTotale - art.prezzo).toFixed(2));
      console.log(this.prezzoTotale);
      for(let i=0;i<this.articoli.length;i++){
        if(this.articoli[i].codArt==art.codArt){
          this.articoli[i].pzCart+=1;
        }
      }
    }
    if(productExistInCart.qt==0){
      this.carrello = this.carrello.filter(({tipo}) => tipo !== art.descrizione)
      //this.prezzoTotale= this.prezzoTotale - art.prezzo;
      console.log(this.prezzoTotale);
    }
    console.log(this.carrello);
    
   }

   removeP2(art: Cart) {
    const productExistInCart = this.carrello.find(({tipo}) => tipo === art.tipo);
    if (!productExistInCart) {
      return;
    }
    if(productExistInCart.qt>=1){
      productExistInCart.qt -= 1;
      this.prezzoTotale= Number(Number(this.prezzoTotale - art.prezzo).toFixed(2));
      console.log(this.prezzoTotale);
      for(let i=0;i<this.articoli.length;i++){
        if(this.articoli[i].descrizione==art.tipo){
          this.articoli[i].pzCart+=1;
        }
      }
    }
    if(productExistInCart.qt==0){
      this.carrello = this.carrello.filter(({tipo}) => tipo !== art.tipo)
      //this.prezzoTotale= this.prezzoTotale - art.prezzo;
      console.log(this.prezzoTotale);
    }
    console.log(this.carrello);
   }





}
