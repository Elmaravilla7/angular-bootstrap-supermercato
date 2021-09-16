export class ArticoliDTO {
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
  
  export class BarcodeDTO {
    [x: string]: any;
    constructor(
      public barcode: string,
      public idTipoArt: string
    ){}
      
  
  }

  export class FamAssortDTO {
    constructor(
      public id: number,
      public descrizione: string 
    ){}

    

}
  
  export class IngredientiDTO {
    constructor(
      public codArt: string,
      public info: string
    ){}

  
  }
  
  
  export class IvaDTO {
    constructor(
      public idIva: number,
      public descrizione: string,
      public aliquota: number

    ){}
  
    
  
  }


  export class DettListinoDTO {
    constructor(
      public codArt:string,
      public prezzo: number,
      public sconto: number,
      public prezzoFinale: number


    ){}

    

  }


  
  export class InfoMsg{
    [x: string]: any;
    constructor(
      public code: string,
      public message: string
    ){}
    
      
    
  }

  export class Cart {
    constructor(
      public tipo: string,
      public qt: number,
      public prezzo: number


    ){}

    

  }

