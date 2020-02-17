import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import axios from 'axios';

@Injectable()

export class UsuarioService {

  constructor(private http: HttpClient) { }

  private axiosInstance = axios.create({
    baseURL:'http://localhost:3000'
  });

  private opcoes = {headers: new HttpHeaders({
    "Content-Type": "application/json"
  })}

  save(usuario: Usuario) {
    return  this.axiosInstance.post('', usuario);
  }

  getUsuario(id:string){
    return this.http.get('http://localhost:3000');
  }
}
