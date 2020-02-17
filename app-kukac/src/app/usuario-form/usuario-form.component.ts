import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  @Input() usuario: Usuario;
  @Output() saveUsuario = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.saveUsuario.emit(form);
  }

  formataRenda(event) {
    if (!event.target.value) {
      event.target.value = '0';
    }
    if (event.target.value.includes('.')) {
      if (event.target.value.split('.')[1].length != 2) {
        if (event.target.value.split('.')[1].length == 1) {
          event.target.value += '0';
        } else {
          event.target.value += '00';
        }
      }
    } else {
      event.target.value += '.00';
    }
  }

}