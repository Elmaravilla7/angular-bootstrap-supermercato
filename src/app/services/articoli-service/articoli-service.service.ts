import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { ArticoliDTO, DettListinoDTO, InfoMsg } from 'src/app/articoli/dto/dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticoliServiceService {

  server = "localhost";
  //port = "5051";

  

  constructor(private httpClient:HttpClient) { }

  getBasicAuthHeader() {
    let UserId = "Emilio";
    let Password = "123456";

    let retVal = "Basic " + window.btoa(UserId + ":" + Password);

    return retVal;
  }


  searchByCod(codart : string):Observable<ArticoliDTO> {
    let headers = new HttpHeaders(
      {Authorization : this.getBasicAuthHeader() }
    )
    return this.httpClient.get<ArticoliDTO>(`http://${this.server}:5051/api/articoli/ricerca/fromcodice/${codart}`,{headers});

  }



  searchByDesc(descrizione : string) {
    let headers = new HttpHeaders(
      {Authorization : this.getBasicAuthHeader() }
    )

    return this.httpClient.get<ArticoliDTO[]>(`http://${this.server}:5051/api/articoli/ricerca/fromdescrizione/${descrizione}`,{headers});

  }


  searchByBarcode(barcode: string) {
    let headers = new HttpHeaders(
      {Authorization : this.getBasicAuthHeader() }
    )
    return this.httpClient.get<ArticoliDTO>(`http://${this.server}:5051/api/articoli/ricerca/frombarcode/${barcode}`,{headers});
  }


  inserisciArticolo(articolo: ArticoliDTO) {
    let headers = new HttpHeaders(
      {Authorization : this.getBasicAuthHeader() }
    )
    console.log(articolo);
    return this.httpClient.post<InfoMsg>(`http://${this.server}:5051/api/articoli/inserisci`, articolo);
  }


  eliminaArticolo(codart: string) {
    let headers = new HttpHeaders(
      {Authorization : this.getBasicAuthHeader() }
    )
    return this.httpClient.delete<InfoMsg>(`http://${this.server}:5051/api/articoli/elimina/${codart}`);
  }


  searchByCodArtP(codart: string) {
    let headers = new HttpHeaders(
      {Authorization : this.getBasicAuthHeader() }
    )
    return this.httpClient.get<DettListinoDTO>(`http://${this.server}:5071/api/gestione/ricerca/fromcodice/${codart}`,{headers});
  }

  inserisciArticoloP(dett: DettListinoDTO) {
    let headers = new HttpHeaders(
      {Authorization : this.getBasicAuthHeader() }
    )
    return this.httpClient.post<InfoMsg>(`http://${this.server}:5071/api/gestione/inserisci`, dett);
  }


  eliminaArticoloP(codart: string) {
    let headers = new HttpHeaders(
      {Authorization : this.getBasicAuthHeader() }
    )
    return this.httpClient.delete<InfoMsg>(`http://${this.server}:5071/api/gestione/elimina/${codart}`);
  }

  searchPriceByCodart(codart: string) {
    let headers = new HttpHeaders(
      {Authorization : this.getBasicAuthHeader() }
    )
    return this.httpClient.get<number>(`http://${this.server}:5071/api/gestione/ricerca/fromcodice/prezzo/${codart}`,{headers});
  }

  

  
  



}
