import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: Usuario;
  dadosUsuario: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  saveUsuario(form: NgForm) {
    this.usuario = form.value;
    this.usuario.id = new Date().getTime().toString();
    this.usuarioService.save(this.usuario).then(dados => { this.dadosUsuario = dados.data }).catch(erro => { console.log(erro) });
  }

  resetaDados(event) {
    this.dadosUsuario = null;
    this.usuario = new Usuario();
  }
}
