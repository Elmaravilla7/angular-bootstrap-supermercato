import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = ''
  password = ''
  autenticato = true
  errorMsg = 'Credenziali errate o non valide!'

  constructor(private route : Router, private BasicAuth: AuthappService ) { }

  ngOnInit() {
    
  }

  gestAut() {

    if (this.BasicAuth.autentica(this.userid, this.password))
    {
        this.autenticato = true;
        this.route.navigate(['home', this.userid])
    }
    else
    {
        this.autenticato = false;
    }

  }
}
