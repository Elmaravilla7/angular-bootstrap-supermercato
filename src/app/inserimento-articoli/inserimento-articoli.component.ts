import { Component, OnInit } from '@angular/core';
import { ArticoliDTO, BarcodeDTO, FamAssortDTO, IngredientiDTO, IvaDTO } from '../articoli/dto/dto';
import { ArticoliServiceService } from '../services/articoli-service/articoli-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { InfoMsg } from '../articoli/dto/dto';

export class Articoli {
  constructor(
    public codArt: string,
    public descrizione: string,
    public um: string,
    public codStat: string,
    public pzCart: number,
    public pesoNetto: number,
    public idStatoArt: string,
    public dataCreaz: Date,
    public prezzo: number,
    public iva: IvaDTO,
    public famAssort: FamAssortDTO,
    public barcode: BarcodeDTO[],
    public ingredienti: IngredientiDTO,
  ){}
  
  }

@Component({
  selector: 'app-inserimento-articoli',
  templateUrl: './inserimento-articoli.component.html',
  styleUrls: ['./inserimento-articoli.component.css']
})



export class InserimentoArticoliComponent implements OnInit {
 
  public artForm=this.createForm();
  codArt: string="";
  descrizione: string="";
  um:string="";
  codStat: string="1";
  pzCart: number=0;
  pesoNetto: number=0;
  idStatoArt: string="1";
  //dataCreaz: Date | undefined;
  //prezzo: number=0;
  data:string="";
  ivaVal:number=0;
  famiglia:number=-1;
  bar:string="";
  ingrDescr:string="";
  barcode:BarcodeDTO[]=[];
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
      descrizione : new FormControl(''),
      um : new FormControl(''),
      codStat: new FormControl(''),
      pzCart: new FormControl(''),
      pesoNetto: new FormControl(''),
      idStatoArt : new FormControl(''),
      dataCreaz : new FormControl(''),
    })
  }


  aggiungi(): void {
    this.viewErr=false;
    let art:ArticoliDTO;
    if(this.bar.trim()!=""){
      this.barcode.push(new BarcodeDTO(this.bar,"CP"))
      art=new Articoli(this.codArt,this.descrizione,this.um,"null",this.pzCart,this.pesoNetto,this.idStatoArt,new Date(),0.0,new IvaDTO(this.ivaVal,"",this.ivaVal),new FamAssortDTO(this.famiglia,this.descrizione),this.barcode,new IngredientiDTO(this.codArt,this.ingrDescr));
    }
    else{
      art=new Articoli(this.codArt,this.descrizione,this.um,"null",this.pzCart,this.pesoNetto,this.idStatoArt,new Date(),0.0,new IvaDTO(this.ivaVal,"",this.ivaVal),new FamAssortDTO(this.famiglia,this.descrizione),[],new IngredientiDTO(this.codArt,this.ingrDescr));
    }
    
    console.log(art);
    this.serv.inserisciArticolo(art).subscribe(
      response => {
        
        this.infoMsg = response;
        console.log(" ok!")
        this.bar="";
        this.barcode=[];
        this.insOk=true;
      },error => {
        this.infoMsg = error;
        console.log(error)
        this.viewErr=true;
        this.bar="";
        this.barcode=[];
      }
    )

  }
  

}
