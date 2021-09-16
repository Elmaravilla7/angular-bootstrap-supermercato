import { Component, OnInit, Output,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthappService } from '../services/authapp.service';
import { ListaArticoliComponent } from '../lista-articoli/lista-articoli.component';
import { Cart } from '../articoli/dto/dto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  utente = '';
  messaggio = '';
  okAdmin=false;



  constructor(private route:ActivatedRoute,private BasicAuth: AuthappService) { }

  ngOnInit(): void {

    this.utente = this.route.snapshot.params['userid'];
    if(this.utente=="Admin"){
      this.okAdmin=true;
    }
    console.log("login Admin: ",this.okAdmin);

  }

  logout(): void{
    this.BasicAuth.clearAll();
  }

 

}
