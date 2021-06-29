import { UsuarioService } from './../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servico: UsuarioService) { }

  hide = true;

  ngOnInit(): void {
  }



}
